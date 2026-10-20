# Copyright (c) 2023-present Plane Software, Inc. and contributors
# SPDX-License-Identifier: AGPL-3.0-only
# See the LICENSE file for details.

import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location("plane_upgrade", Path(__file__).parents[2] / "deploy/pranala/plane_upgrade.py")
upgrade = importlib.util.module_from_spec(spec)
spec.loader.exec_module(upgrade)


class PostgresAuthenticationTest(unittest.TestCase):
    def test_uses_container_secret_without_putting_password_in_process_arguments(self):
        env = {"POSTGRES_USER": "test_user", "POSTGRES_DB": "plane", "POSTGRES_PASSWORD": "never-expose-this-value"}
        command = upgrade.postgres_command("isolated-db", env, "psql", "-Atc", "SELECT 1")
        self.assertNotIn(env["POSTGRES_PASSWORD"], " ".join(command))
        self.assertIn('export PGPASSWORD="$POSTGRES_PASSWORD"; exec "$@"', command)
        self.assertEqual(command[command.index("-h") + 1], "127.0.0.1")
        self.assertEqual(command[-1], "SELECT 1")

    def test_restore_stream_is_passed_to_the_target_container(self):
        command = upgrade.postgres_command("isolated-db", {"POSTGRES_USER": "test", "POSTGRES_DB": "plane"}, "pg_restore", "--exit-on-error", interactive=True)
        self.assertEqual(command[:4], ["docker", "exec", "-i", "isolated-db"])
        self.assertIn("--exit-on-error", command)


if __name__ == "__main__":
    unittest.main()
