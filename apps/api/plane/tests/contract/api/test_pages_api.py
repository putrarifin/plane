# Copyright (c) 2023-present Plane Software, Inc. and contributors
# SPDX-License-Identifier: AGPL-3.0-only
# See the LICENSE file for details.

from datetime import timedelta
from unittest.mock import Mock
from uuid import uuid4

import pytest
from django.core.cache import cache
from django.utils import timezone

from plane.db.models import Page, Project, ProjectMember, ProjectPage, User, WorkspaceMember


def project_url(workspace, project, page=None):
    root = f"/api/v1/workspaces/{workspace.slug}/projects/{project.id}/pages/"
    return f"{root}{page.id}/" if page else root


def workspace_url(workspace, page=None):
    root = f"/api/v1/workspaces/{workspace.slug}/pages/"
    return f"{root}{page.id}/" if page else root


@pytest.fixture
def pages_setup(workspace, create_user, settings, monkeypatch):
    settings.CACHES = {"default": {"BACKEND": "django.core.cache.backends.locmem.LocMemCache"}}
    cache.clear()
    monkeypatch.setattr("plane.bgtasks.page_transaction_task.page_transaction.delay", Mock())
    monkeypatch.setattr("plane.bgtasks.recent_visited_task.recent_visited_task.delay", Mock())
    monkeypatch.setattr("plane.middleware.logger.process_logs.delay", Mock())
    monkeypatch.setattr("plane.db.mixins.soft_delete_related_objects.delay", Mock())
    project = Project.objects.create(workspace=workspace, name="Pages A", identifier="PGA")
    ProjectMember.objects.create(workspace=workspace, project=project, member=create_user, role=20)
    outsider = User.objects.create(email=f"pages-{uuid4().hex}@plane.test", username=f"pages-{uuid4().hex}")
    other_project = Project.objects.create(workspace=workspace, name="Pages B", identifier="PGB")
    ProjectMember.objects.create(workspace=workspace, project=other_project, member=outsider, role=20)

    def make_page(name, owner=create_user, access=Page.PUBLIC_ACCESS, project=project):
        page = Page.objects.create(workspace=workspace, owned_by=owner, name=name, access=access)
        ProjectPage.objects.create(workspace=workspace, project=project, page=page)
        return page

    public = make_page("Public page")
    own_private = make_page("Own private", access=Page.PRIVATE_ACCESS)
    other_private = make_page("Other private", owner=outsider, access=Page.PRIVATE_ACCESS)
    foreign = make_page("Foreign project", owner=outsider, project=other_project)
    return workspace, project, public, own_private, other_private, foreign, other_project


@pytest.mark.contract
@pytest.mark.django_db
class TestPagesAPI:
    def test_project_list_supports_sdk_pagination(self, api_key_client, pages_setup):
        workspace, project, public, private, *_ = pages_setup
        url = project_url(workspace, project)
        first = api_key_client.get(url, {"per_page": 1})
        assert first.status_code == 200
        assert first.json()["total_count"] == 2
        assert first.json()["next_page_results"] is True
        second = api_key_client.get(url, {"per_page": 1, "cursor": first.json()["next_cursor"]})
        assert second.status_code == 200
        assert second.json()["next_page_results"] is False
        ids = {row["id"] for row in first.json()["results"] + second.json()["results"]}
        assert ids == {str(public.id), str(private.id)}

    def test_workspace_list_uses_only_accessible_project_pages(self, api_key_client, pages_setup):
        workspace, _, public, private, *_ = pages_setup
        response = api_key_client.get(workspace_url(workspace), {"per_page": 5})
        assert response.status_code == 200
        assert {row["id"] for row in response.json()["results"]} == {str(public.id), str(private.id)}

    @pytest.mark.parametrize("scope", ["project", "workspace"])
    def test_retrieve_visible_page(self, api_key_client, pages_setup, scope):
        workspace, project, public, *_ = pages_setup
        url = project_url(workspace, project, public) if scope == "project" else workspace_url(workspace, public)
        response = api_key_client.get(url)
        assert response.status_code == 200
        assert response.json()["id"] == str(public.id)

    def test_private_page_owned_by_someone_else_is_denied(self, api_key_client, pages_setup):
        workspace, project, _, _, private, *_ = pages_setup
        assert api_key_client.get(project_url(workspace, project, private)).status_code == 403
        assert api_key_client.get(workspace_url(workspace, private)).status_code == 404

    def test_page_cannot_be_read_through_a_different_project(self, api_key_client, pages_setup):
        workspace, project, _, _, _, foreign, other_project = pages_setup
        assert api_key_client.get(project_url(workspace, project, foreign)).status_code == 403
        assert api_key_client.get(project_url(workspace, other_project, foreign)).status_code == 403

    def test_soft_deleted_project_link_is_not_accessible(self, api_key_client, pages_setup):
        workspace, project, public, *_ = pages_setup
        ProjectPage.objects.get(project=project, page=public).delete()
        assert api_key_client.get(project_url(workspace, project, public)).status_code == 403
        rows = api_key_client.get(workspace_url(workspace)).json()["results"]
        assert str(public.id) not in {row["id"] for row in rows}

    def test_inactive_membership_is_denied(self, api_key_client, pages_setup):
        workspace, project, public, *_ = pages_setup
        ProjectMember.objects.filter(project=project).update(is_active=False)
        assert api_key_client.get(project_url(workspace, project)).status_code == 403
        assert api_key_client.get(workspace_url(workspace)).json()["results"] == []

    def test_inactive_workspace_membership_is_denied(self, api_key_client, pages_setup, create_user):
        workspace, project, *_ = pages_setup
        WorkspaceMember.objects.filter(workspace=workspace, member=create_user).update(is_active=False)
        assert api_key_client.get(project_url(workspace, project)).status_code == 403
        assert api_key_client.get(workspace_url(workspace)).status_code == 403
        assert (
            api_key_client.post(project_url(workspace, project), {"name": "Denied"}, format="json").status_code == 403
        )

    @pytest.mark.parametrize("order_by", ["--created_at", "unknown"])
    def test_invalid_ordering_is_rejected(self, api_key_client, pages_setup, order_by):
        workspace, project, *_ = pages_setup
        assert api_key_client.get(project_url(workspace, project), {"order_by": order_by}).status_code == 400

    @pytest.mark.parametrize("per_page", [0, -1, 101, "invalid"])
    def test_invalid_pagination_is_rejected(self, api_key_client, pages_setup, per_page):
        workspace, project, *_ = pages_setup
        response = api_key_client.get(project_url(workspace, project), {"per_page": per_page})
        assert response.status_code == 400

    def test_expired_and_inactive_keys_are_denied(self, api_key_client, api_token, pages_setup):
        workspace, project, *_ = pages_setup
        api_token.expired_at = timezone.now() - timedelta(minutes=1)
        api_token.save()
        assert api_key_client.get(project_url(workspace, project)).status_code in (401, 403)
        api_token.expired_at = None
        api_token.is_active = False
        api_token.save()
        assert api_key_client.get(workspace_url(workspace)).status_code in (401, 403)

    def test_anonymous_requests_are_denied(self, api_client, pages_setup):
        workspace, project, *_ = pages_setup
        assert api_client.get(project_url(workspace, project)).status_code in (401, 403)
        assert api_client.get(workspace_url(workspace)).status_code in (401, 403)

    def test_api_create_preserves_owner_and_sanitizes_html(self, api_key_client, pages_setup, create_user):
        workspace, project, *_ = pages_setup
        response = api_key_client.post(
            project_url(workspace, project),
            {
                "name": "MCP page",
                "description_html": "<p>Hello</p><script>alert(1)</script>",
                "owned_by": str(uuid4()),
                "workspace": str(uuid4()),
            },
            format="json",
        )
        assert response.status_code == 201
        page = Page.objects.get(pk=response.json()["id"])
        assert page.owned_by_id == create_user.id
        assert page.workspace_id == workspace.id
        assert "<script" not in page.description_html
        assert "Hello" in page.description_html

    def test_guest_cannot_create_and_cannot_read_non_owned_pages_when_restricted(
        self, api_key_client, pages_setup, create_user
    ):
        workspace, project, _, _, _, _, _ = pages_setup
        ProjectMember.objects.filter(project=project, member=create_user).update(role=5)
        project.guest_view_all_features = False
        project.save()
        response = api_key_client.post(project_url(workspace, project), {"name": "Denied"}, format="json")
        assert response.status_code == 403
        other = Page.objects.create(workspace=workspace, owned_by=pages_setup[4].owned_by, name="Guest restricted")
        ProjectPage.objects.create(workspace=workspace, project=project, page=other)
        assert str(other.id) not in {
            row["id"] for row in api_key_client.get(project_url(workspace, project)).json()["results"]
        }
        assert str(other.id) not in {
            row["id"] for row in api_key_client.get(workspace_url(workspace)).json()["results"]
        }
