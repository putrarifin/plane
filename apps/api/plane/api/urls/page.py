# Copyright (c) 2023-present Plane Software, Inc. and contributors
# SPDX-License-Identifier: AGPL-3.0-only
# See the LICENSE file for details.

from django.urls import path

from plane.api.views.page import ProjectPageAPIViewSet, WorkspacePageAPIView


urlpatterns = [
    path("workspaces/<str:slug>/pages/", WorkspacePageAPIView.as_view(), name="api-workspace-pages"),
    path("workspaces/<str:slug>/pages/<uuid:page_id>/", WorkspacePageAPIView.as_view(), name="api-workspace-page"),
    path(
        "workspaces/<str:slug>/projects/<uuid:project_id>/pages/",
        ProjectPageAPIViewSet.as_view({"get": "list", "post": "create"}),
        name="api-project-pages",
    ),
    path(
        "workspaces/<str:slug>/projects/<uuid:project_id>/pages/<uuid:page_id>/",
        ProjectPageAPIViewSet.as_view({"get": "retrieve"}),
        name="api-project-page",
    ),
]
