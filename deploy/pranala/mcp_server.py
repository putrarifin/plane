#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.12,<3.13"
# dependencies = ["plane-mcp-server==0.2.9", "plane-sdk==0.2.16", "fastmcp==3.2.0"]
# ///
# Copyright (c) 2023-present Plane Software, Inc. and contributors
# SPDX-License-Identifier: AGPL-3.0-only
# See the LICENSE file for details.
"""Plane MCP launcher with typed Pages query parameters for the pinned SDK.

Credentials and workspace settings remain supplied by the existing environment.
No SDK files or shared package caches are modified.
"""

from functools import wraps

from plane.api.pages import Pages
from plane.models.query_params import PaginatedQueryParams


def page_query(params):
    return (
        PaginatedQueryParams.model_validate(params)
        if isinstance(params, dict)
        else params
    )


def install_page_query_compat():
    if getattr(Pages, "_pranala_query_compat", False):
        return
    project_list = Pages.list_project_pages
    workspace_list = Pages.list_workspace_pages

    @wraps(project_list)
    def list_project_pages(self, workspace_slug, project_id, params=None):
        return project_list(self, workspace_slug, project_id, page_query(params))

    @wraps(workspace_list)
    def list_workspace_pages(self, workspace_slug, params=None):
        return workspace_list(self, workspace_slug, page_query(params))

    Pages.list_project_pages = list_project_pages
    Pages.list_workspace_pages = list_workspace_pages
    Pages._pranala_query_compat = True


if __name__ == "__main__":
    install_page_query_compat()
    from plane_mcp.__main__ import main

    main()
