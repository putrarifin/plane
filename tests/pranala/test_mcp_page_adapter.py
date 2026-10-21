# Copyright (c) 2023-present Plane Software, Inc. and contributors
# SPDX-License-Identifier: AGPL-3.0-only
# See the LICENSE file for details.

import importlib.util
from pathlib import Path
import unittest
from unittest.mock import patch

from plane import PlaneClient
from plane.api.pages import Pages
from plane.models.query_params import PaginatedQueryParams
from pydantic import ValidationError


spec = importlib.util.spec_from_file_location(
    "pranala_mcp", Path(__file__).resolve().parents[2] / "deploy/pranala/mcp_server.py"
)
adapter = importlib.util.module_from_spec(spec)
spec.loader.exec_module(adapter)

RESPONSE = {
    "results": [{"id": "page-test", "name": "Test"}],
    "total_count": 1,
    "next_cursor": "5:1:0",
    "prev_cursor": "5:-1:1",
    "next_page_results": False,
    "prev_page_results": False,
    "count": 1,
    "total_pages": 1,
    "total_results": 1,
}


class TestPagesQueryAdapter(unittest.TestCase):
    def test_project_dictionary_reaches_sdk_as_query_parameters(self):
        adapter.install_page_query_compat()
        with patch.object(Pages, "_get", return_value=RESPONSE) as get:
            response = PlaneClient(
                api_key="test", base_url="https://plane.test"
            ).pages.list_project_pages(
                "workspace", "project", {"per_page": 5, "cursor": "5:0:0"}
            )
        self.assertEqual(response.results[0].id, "page-test")
        self.assertEqual(
            get.call_args.kwargs["params"], {"per_page": 5, "cursor": "5:0:0"}
        )

    def test_workspace_dictionary_reaches_sdk_as_query_parameters(self):
        adapter.install_page_query_compat()
        with patch.object(Pages, "_get", return_value=RESPONSE) as get:
            PlaneClient(
                api_key="test", base_url="https://plane.test"
            ).pages.list_workspace_pages("workspace", params={"per_page": 5})
        self.assertEqual(get.call_args.kwargs["params"], {"per_page": 5})

    def test_existing_models_and_absent_parameters_remain_valid(self):
        model = PaginatedQueryParams(per_page=5)
        self.assertIs(adapter.page_query(model), model)
        self.assertIsNone(adapter.page_query(None))

    def test_invalid_page_size_is_rejected_before_network_access(self):
        with self.assertRaises(ValidationError):
            adapter.page_query({"per_page": 0})

    def test_installation_is_idempotent(self):
        adapter.install_page_query_compat()
        installed = Pages.list_project_pages
        adapter.install_page_query_compat()
        self.assertIs(Pages.list_project_pages, installed)


if __name__ == "__main__":
    unittest.main()
