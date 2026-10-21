#!/usr/bin/env python3
"""Publish the verified hydration/Pages patch using existing Docker auth.

Run on the deployment host as its Docker operator. Only public release assets
are downloaded; no application environment or registry credentials are read.
"""

import hashlib
import json
import shutil
import subprocess
import tarfile
import urllib.request
from pathlib import Path

RELEASE = (
    "https://github.com/putrarifin/plane/releases/download/pranala-v1.4.2-custom.003/"
)
SOURCE = "8a815c0548f8175cf21ef58ff074b677508ac008"
WEB = "kodock.komar.id/plane-frontend:v1.4.2-custom.003"
API = "kodock.komar.id/plane-backend:v1.4.2-custom.001"
ASSETS = {
    "pranala-frontend-v1.4.2-custom.003-amd64.tar.gz": "8c7121e762d7c809f443430a133d91806c69ee72c4be626f3b477d78762a4856",
    "pranala-api-v1.4.2-custom.001-context.tar.gz": "6311cb97859d172425cb222984855e97e0e5d3fef2bc08ebb31015fee06938a2",
}


def run(*args, **kwargs):
    return subprocess.run(args, check=True, **kwargs)


def main():
    root = Path("/tmp/pranala-plane-patch-20261021")
    root.mkdir(mode=0o700, exist_ok=True)
    for name, digest in ASSETS.items():
        path = root / name
        if not path.exists():
            with (
                urllib.request.urlopen(RELEASE + name, timeout=120) as source,
                path.open("wb") as target,
            ):
                shutil.copyfileobj(source, target)
        with path.open("rb") as stream:
            assert hashlib.file_digest(stream, "sha256").hexdigest() == digest, name
        print(f"Verified {name}", flush=True)

    run("docker", "load", "-i", str(root / next(iter(ASSETS))))
    context = root / "api-context"
    context.mkdir(exist_ok=True)
    with tarfile.open(root / "pranala-api-v1.4.2-custom.001-context.tar.gz") as archive:
        archive.extractall(context, filter="data")
    run(
        "docker",
        "build",
        "--build-arg",
        f"VCS_REF={SOURCE}",
        "-f",
        "deploy/pranala/Dockerfile.api",
        "-t",
        API,
        ".",
        cwd=context,
    )
    for name, revision in ((WEB, "4c52dd927"), (API, SOURCE)):
        result = run("docker", "image", "inspect", name, stdout=subprocess.PIPE)
        info = json.loads(result.stdout)[0]
        assert info["Architecture"] == "amd64"
        assert info["Config"]["Labels"]["org.opencontainers.image.revision"].startswith(
            revision
        )
        run("docker", "push", name)
    print("Verified patch images published; no running containers changed.", flush=True)


if __name__ == "__main__":
    main()
