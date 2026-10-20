#!/usr/bin/env python3
# Copyright (c) 2023-present Plane Software, Inc. and contributors
# SPDX-License-Identifier: AGPL-3.0-only
# See the LICENSE file for details.
"""Back up and rehearse a Plane CE upgrade without publishing credentials or ports."""

import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import time
from datetime import datetime, timezone
from uuid import uuid4

TARGET = "v1.4.2"
MINIO = "docker.io/pgsty/minio:RELEASE.2026-08-04T00-00-00Z"
ROOT = Path("/data/backups/pranala-work")
APPS = ["proxy", "beat-worker", "api", "live", "worker", "web", "admin", "space"]
CORE = {"users", "workspaces", "projects", "issues", "pages", "file_assets", "states", "labels", "workspace_members", "project_members"}
S3_PROBE = r'''
import boto3, os, hashlib, json
from botocore.config import Config
c = boto3.client('s3', endpoint_url=os.environ['AWS_S3_ENDPOINT_URL'],
    aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'], aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
    region_name=os.environ.get('AWS_REGION') or 'us-east-1', config=Config(signature_version='s3v4',s3={'addressing_style':'path'},connect_timeout=5,read_timeout=15,retries={'max_attempts':2}))
rows=[]
for b in sorted(x['Name'] for x in c.list_buckets()['Buckets']):
    for page in c.get_paginator('list_objects_v2').paginate(Bucket=b):
        for obj in page.get('Contents',[]):
            h=c.head_object(Bucket=b, Key=obj['Key'])
            assert h['ContentLength']==obj['Size']
            rows.append([b,obj['Key'],obj['ETag'],obj['Size']])
rows.sort()
samples=[]
for b,k,_,size in rows[:3]:
    body=c.get_object(Bucket=b,Key=k)['Body']
    digest=hashlib.sha256()
    while True:
        chunk=body.read(1024*1024)
        if not chunk: break
        digest.update(chunk)
    body.close()
    samples.append(digest.hexdigest())
print(json.dumps({'count':len(rows),'bytes':sum(x[3] for x in rows),'metadata_sha256':hashlib.sha256(json.dumps(rows).encode()).hexdigest(),'sample_sha256':samples},sort_keys=True))
'''


def run(*args, stdin=None, stdout=None, check=True):
    result = subprocess.run(args, input=stdin, stdout=stdout or subprocess.PIPE, stderr=subprocess.PIPE)
    if check and result.returncode:
        raise RuntimeError(f"{args[0]} operation failed ({result.returncode}): {result.stderr.decode(errors='replace')[-1200:]}")
    return (result.stdout or b"").decode()


def inspect(name):
    return json.loads(run("docker", "inspect", name))[0]


def environment(container):
    return dict(value.split("=", 1) for value in container["Config"]["Env"])


def write_env(path, values):
    if any("\n" in value for value in values.values()):
        raise RuntimeError("Multiline environment value requires an explicit deployment adapter")
    path.write_text("".join(f"{key}={value}\n" for key, value in values.items()))
    path.chmod(0o600)


def discover(stack):
    ids = run("docker", "ps", "-aq", "--filter", f"name=-{stack}").split()
    if not ids:
        raise RuntimeError("No containers found for the requested stack")
    containers = json.loads(run("docker", "inspect", *ids))
    result = {c["Config"]["Labels"]["com.docker.compose.service"]: c for c in containers}
    for service in ("api", "plane-db", "plane-minio", "plane-mq", "plane-redis"):
        if service not in result:
            raise RuntimeError(f"Required service missing: {service}")
    return result


def postgres_command(container, env, program, *arguments, interactive=False):
    command = ["docker", "exec"]
    if interactive:
        command.append("-i")
    return command + [container, "sh", "-c", 'export PGPASSWORD="$POSTGRES_PASSWORD"; exec "$@"',
        "plane-pg-client", program, "-h", "127.0.0.1", "-U", env["POSTGRES_USER"], "-d", env["POSTGRES_DB"], *arguments]


def database_counts(container, env):
    command = postgres_command(container, env, "psql", "-Atc")
    tables = run(*command, "SELECT tablename FROM pg_tables WHERE schemaname='public' ORDER BY tablename").splitlines()
    if not all(re.fullmatch(r"[a-zA-Z0-9_]+", name) for name in tables):
        raise RuntimeError("Unexpected table identifier")
    query = " UNION ALL ".join(f"SELECT '{name}' AS t, count(*) AS n FROM \"{name}\"" for name in tables)
    return json.loads(run(*command, f"SELECT json_object_agg(t,n) FROM ({query}) counts"))


def sha256(path):
    with path.open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest()


def backend_job(image, network, env_file, *command):
    return run("docker", "run", "--rm", "--network", network, "--env-file", str(env_file), "--entrypoint", command[0], image, *command[1:])


def backup(stack, containers, quiesce=False):
    if not containers["api"]["Config"]["Image"].endswith(":v1.3.0"):
        raise RuntimeError("Backup adapter expects the audited v1.3.0 baseline")
    dest = ROOT / datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    dest.mkdir(parents=True, mode=0o700)
    (dest / "containers.private.json").write_text(json.dumps(containers, indent=2))
    api_env = environment(containers["api"])
    write_env(dest / "api.env", api_env)
    write_env(dest / "target.env", {**api_env, "APP_RELEASE": TARGET})
    db_env = environment(containers["plane-db"])
    write_env(dest / "db.env", {k: v for k, v in db_env.items() if k.startswith("POSTGRES_") or k == "PGDATA"})
    write_env(dest / "minio.env", {k: v for k, v in environment(containers["plane-minio"]).items() if k.startswith("MINIO_")})
    labels = containers["api"]["Config"]["Labels"]
    config_files = labels.get("com.docker.compose.project.config_files", "").split(",")
    for filename in config_files:
        path = Path(filename)
        if path.is_file():
            shutil.copy2(path, dest / path.name)
            if (path.parent / ".env").is_file():
                shutil.copy2(path.parent / ".env", dest / ".env")
    if config_files and Path(config_files[0]).is_file():
        directory = Path(config_files[0]).parent
        command = ["docker", "compose", "--project-directory", str(directory), "-p", labels["com.docker.compose.project"]]
        if (directory / ".env").is_file():
            command += ["--env-file", str(directory / ".env")]
        for filename in config_files:
            command += ["-f", filename]
        canonical = run(*command, "config", "--format", "json")
        json.loads(canonical)
        (dest / "compose.resolved.private.json").write_text(canonical)
    networks = set(containers["api"]["NetworkSettings"]["Networks"]) & set(containers["plane-minio"]["NetworkSettings"]["Networks"])
    if len(networks) != 1:
        raise RuntimeError("Expected a single shared Plane stack network")
    network = networks.pop()
    stopped = []
    try:
        if quiesce:
            for name in APPS:
                if name in containers and containers[name]["State"]["Running"]:
                    run("docker", "stop", "-t", "120", containers[name]["Id"])
                    stopped.append(containers[name]["Id"])
        objects = json.loads(backend_job(containers["api"]["Config"]["Image"], network, dest / "api.env", "python", "-c", S3_PROBE))
        counts = database_counts(containers["plane-db"]["Name"], db_env)
        if quiesce:
            for name in ("plane-minio", "plane-mq", "plane-redis"):
                run("docker", "stop", "-t", "60", containers[name]["Id"])
                stopped.append(containers[name]["Id"])
        with (dest / "database.dump").open("wb") as stream:
            run(*postgres_command(containers["plane-db"]["Id"], db_env, "pg_dump", "-Fc"), stdout=stream)
        if (dest / "database.dump").stat().st_size < 1024:
            raise RuntimeError("Database dump is unexpectedly small")
        archives = ["database.dump"]
        sources = [("plane-minio", "/export", "uploads.tar.gz")]
        if quiesce:
            sources += [("plane-mq", "/var/lib/rabbitmq", "rabbitmq.tar.gz"), ("plane-redis", "/data", "redis.tar.gz")]
        for service, mount, filename in sources:
            source = next(m["Source"] for m in containers[service]["Mounts"] if m["Destination"] == mount)
            run("tar", "-czf", str(dest / filename), "-C", source, ".")
            archives.append(filename)
        manifest = {"stack": stack, "quiesced": quiesce, "counts": counts, "objects": objects, "sha256": {f: sha256(dest / f) for f in archives}, "baseline_images": {k: c["Config"]["Image"] for k, c in containers.items()}}
        (dest / "manifest.json").write_text(json.dumps(manifest, indent=2))
        for path in dest.iterdir():
            if path.is_file():
                path.chmod(0o600)
        if quiesce:
            run("docker", "start", containers["plane-redis"]["Id"], containers["plane-mq"]["Id"])
        print(json.dumps({"backup_path": str(dest), "quiesced": quiesce, "tables": len(counts), "objects": objects, "archives": manifest["sha256"]}), flush=True)
        return dest
    except Exception:
        if stopped:
            run("docker", "start", *reversed(stopped), check=False)
        raise


def verify(dest):
    manifest = json.loads((dest / "manifest.json").read_text())
    for name, digest in manifest["sha256"].items():
        if sha256(dest / name) != digest:
            raise RuntimeError(f"Archive checksum mismatch: {name}")
    prefix = "pranala-rehearsal-" + uuid4().hex[:10]
    db, minio = prefix + "-db", prefix + "-minio"
    db_env = dict(line.split("=", 1) for line in (dest / "db.env").read_text().splitlines())
    try:
        run("docker", "network", "create", "--internal", prefix)
        for name in (db, minio):
            run("docker", "volume", "create", name)
        run("docker", "run", "-d", "--name", db, "--network", prefix, "--network-alias", "plane-db", "--env-file", str(dest / "db.env"), "-v", f"{db}:/var/lib/postgresql/data", "postgres:15.7-alpine")
        for _ in range(40):
            if subprocess.run(postgres_command(db, db_env, "pg_isready"), stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).returncode == 0:
                break
            time.sleep(2)
        with (dest / "database.dump").open("rb") as stream:
            result = subprocess.run(postgres_command(db, db_env, "pg_restore", "--exit-on-error", "--no-owner", "--no-privileges", interactive=True), stdin=stream, capture_output=True)
        if result.returncode:
            (dest / "restore-error.private.log").write_bytes(result.stderr)
            raise RuntimeError("PostgreSQL restore failed; see private restore log")
        restored = database_counts(db, db_env)
        if restored != manifest["counts"]:
            raise RuntimeError("Restored database row counts do not match backup")
        print(f"PostgreSQL restore verified: {len(restored)} tables", flush=True)
        logs = backend_job("makeplane/plane-backend:" + TARGET, prefix, dest / "target.env", "bash", "./bin/docker-entrypoint-migrator.sh")
        (dest / "migration-rehearsal.log").write_text(logs)
        migrated = database_counts(db, db_env)
        if any(migrated.get(k) != v for k, v in restored.items() if k in CORE):
            raise RuntimeError("Core business row counts changed during migration rehearsal")
        print("Plane v1.4.2 migration rehearsal passed; core business rows preserved", flush=True)
        volume_path = Path(json.loads(run("docker", "volume", "inspect", minio))[0]["Mountpoint"])
        run("tar", "-xzf", str(dest / "uploads.tar.gz"), "-C", str(volume_path))
        run("docker", "run", "-d", "--name", minio, "--network", prefix, "--network-alias", "plane-minio", "--env-file", str(dest / "minio.env"), "-v", f"{minio}:/export", MINIO, "server", "/export", "--console-address", ":9090")
        for attempt in range(20):
            try:
                objects = json.loads(backend_job("makeplane/plane-backend:" + TARGET, prefix, dest / "target.env", "python", "-c", S3_PROBE))
                break
            except RuntimeError:
                if attempt == 19:
                    raise
                time.sleep(2)
        if objects != manifest["objects"]:
            raise RuntimeError("Restored objects differ from the original S3 metadata or sample payloads")
        result = {"restore_verified": True, "migration_to": TARGET, "core_counts": {k: v for k, v in migrated.items() if k in CORE}, "objects": objects}
        (dest / "verification.json").write_text(json.dumps(result, indent=2))
        print(json.dumps(result), flush=True)
    finally:
        for name in (db, minio):
            run("docker", "rm", "-f", name, check=False)
            run("docker", "volume", "rm", name, check=False)
        run("docker", "network", "rm", prefix, check=False)


def main():
    os.umask(0o077)
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("stack")
    parser.add_argument("action", choices=["inspect", "prepare", "backup", "quiesce", "verify", "migrate"])
    parser.add_argument("--backup", type=Path)
    args = parser.parse_args()
    if not re.fullmatch(r"[a-zA-Z0-9]+", args.stack):
        parser.error("Invalid stack identifier")
    containers = discover(args.stack)
    if args.action == "inspect":
        print(json.dumps({k: {"image": v["Config"]["Image"], "running": v["State"]["Running"]} for k, v in containers.items()}, indent=2))
    elif args.action == "prepare":
        for image in [f"makeplane/plane-{name}:{TARGET}" for name in ("backend", "admin", "space", "live", "proxy")] + [MINIO]:
            run("docker", "pull", image)
            print("Prepared " + image, flush=True)
    elif args.action in ("backup", "quiesce"):
        backup(args.stack, containers, args.action == "quiesce")
    else:
        if not args.backup or not args.backup.resolve().is_relative_to(ROOT):
            parser.error("An explicit backup directory under the protected backup root is required")
        if args.action == "verify":
            verify(args.backup)
        elif args.action == "migrate":
            manifest = json.loads((args.backup / "manifest.json").read_text())
            if not manifest["quiesced"] or manifest["stack"] != args.stack:
                raise RuntimeError("A quiesced backup of this exact stack is required")
            if any(containers[n]["State"]["Running"] for n in APPS if n in containers):
                raise RuntimeError("Application services must be stopped before production migration")
            networks = list(containers["api"]["NetworkSettings"]["Networks"])
            if len(networks) != 1:
                raise RuntimeError("Expected a single Plane API network")
            log = backend_job("makeplane/plane-backend:" + TARGET, networks[0], args.backup / "target.env", "bash", "./bin/docker-entrypoint-migrator.sh")
            (args.backup / "production-migration.log").write_text(log)
            print("Production migration completed: " + TARGET, flush=True)


if __name__ == "__main__":
    main()
