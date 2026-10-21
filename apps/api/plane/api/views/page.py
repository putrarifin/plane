# Copyright (c) 2023-present Plane Software, Inc. and contributors
# SPDX-License-Identifier: AGPL-3.0-only
# See the LICENSE file for details.

"""API-key Pages compatibility for Plane CE's project-based page model."""

from django.db import transaction
from django.db.models import Exists, OuterRef, Q
from rest_framework import serializers, status
from rest_framework.exceptions import NotFound, ParseError, PermissionDenied
from rest_framework.response import Response

from plane.api.middleware.api_authentication import APIKeyAuthentication
from plane.api.rate_limit import ApiKeyRateThrottle
from plane.api.views.base import BaseAPIView
from plane.app.permissions import ROLE
from plane.app.serializers.page import PageBinaryUpdateSerializer, PageSerializer
from plane.app.views.page.base import PageViewSet
from plane.bgtasks.page_transaction_task import page_transaction
from plane.db.models import Page, ProjectMember, ProjectPage, WorkspaceMember


class APIPageSerializer(PageSerializer):
    projects = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta(PageSerializer.Meta):
        fields = PageSerializer.Meta.fields + ["projects", "external_id", "external_source"]


class APIPageDetailSerializer(APIPageSerializer):
    description_html = serializers.CharField(read_only=True)

    class Meta(APIPageSerializer.Meta):
        fields = APIPageSerializer.Meta.fields + ["description_html"]


class PagePaginationMixin:
    def get_per_page(self, request, default_per_page=100, max_per_page=100):
        value = super().get_per_page(request, default_per_page, max_per_page)
        if value < 1:
            raise ParseError("per_page must be between 1 and 100.")
        return value

    def page_order(self):
        value = self.request.query_params.get("order_by", "-created_at")
        if value.removeprefix("-") not in {"created_at", "updated_at", "name", "sort_order"}:
            raise ParseError("Unsupported page ordering.")
        return value

    def paginate_pages(self, request, queryset):
        for field in ("external_id", "external_source"):
            if field in request.query_params:
                queryset = queryset.filter(**{field: request.query_params[field]})
        return self.paginate(
            request=request,
            queryset=queryset.order_by(self.page_order(), "id"),
            on_results=lambda rows: APIPageSerializer(rows, many=True).data,
            default_per_page=100,
            max_per_page=100,
        )


class ProjectPageAPIViewSet(PagePaginationMixin, PageViewSet):
    # Preserve ProjectPagePermission and its active project-link/private-page
    # checks. Only the credential type differs from the browser view.
    authentication_classes = [APIKeyAuthentication]

    def check_permissions(self, request):
        super().check_permissions(request)
        if not WorkspaceMember.objects.filter(
            workspace__slug=self.kwargs["slug"],
            member=request.user,
            is_active=True,
        ).exists():
            raise PermissionDenied("Workspace membership is required.")

    def get_throttles(self):
        return [ApiKeyRateThrottle()]

    def get_queryset(self):
        self.page_order()  # Validate before the browser queryset reads order_by.
        queryset = super().get_queryset()
        membership = (
            ProjectMember.objects.filter(
                workspace__slug=self.kwargs["slug"],
                project_id=self.kwargs["project_id"],
                member=self.request.user,
                is_active=True,
            )
            .select_related("project")
            .first()
        )
        if membership and membership.role == ROLE.GUEST.value and not membership.project.guest_view_all_features:
            queryset = queryset.filter(owned_by=self.request.user)
        return queryset

    def list(self, request, slug, project_id):
        return self.paginate_pages(request, self.get_queryset())

    def retrieve(self, request, slug, project_id, page_id):
        page = self.get_queryset().filter(pk=page_id).first()
        if page is None:
            raise NotFound("Page not found.")
        return Response(APIPageDetailSerializer(page).data)

    def create(self, request, slug, project_id):
        description = PageBinaryUpdateSerializer(
            data={
                "description_html": request.data.get("description_html", "<p></p>"),
            }
        )
        description.is_valid(raise_exception=True)
        html = description.validated_data["description_html"]
        allowed = {
            "name",
            "access",
            "color",
            "is_locked",
            "archived_at",
            "view_props",
            "logo_props",
            "external_id",
            "external_source",
        }
        serializer = APIPageSerializer(
            data={key: value for key, value in request.data.items() if key in allowed},
            context={
                "project_id": project_id,
                "owned_by_id": request.user.id,
                "description_json": {},
                "description_binary": None,
                "description_html": html,
            },
        )
        serializer.is_valid(raise_exception=True)
        with transaction.atomic():
            page = serializer.save()
            transaction.on_commit(
                lambda: page_transaction.delay(
                    new_description_html=html,
                    old_description_html=None,
                    page_id=str(page.id),
                )
            )
        return Response(APIPageDetailSerializer(page).data, status=status.HTTP_201_CREATED)


class WorkspacePageAPIView(PagePaginationMixin, BaseAPIView):
    """Workspace reads aggregate only pages the key owner can access in CE."""

    def get_queryset(self):
        slug = self.kwargs["slug"]
        user = self.request.user
        if not WorkspaceMember.objects.filter(workspace__slug=slug, member=user, is_active=True).exists():
            raise PermissionDenied("Workspace membership is required.")
        memberships = ProjectMember.objects.filter(
            workspace__slug=slug,
            member=user,
            is_active=True,
            project__archived_at__isnull=True,
        )
        full_access = memberships.filter(Q(role__gt=ROLE.GUEST.value) | Q(project__guest_view_all_features=True))
        links = ProjectPage.objects.filter(page_id=OuterRef("pk"), project_id__in=memberships.values("project_id"))
        shared_links = links.filter(project_id__in=full_access.values("project_id"))
        return (
            Page.objects.filter(workspace__slug=slug, parent__isnull=True)
            .annotate(
                has_project_access=Exists(links),
                has_full_project_access=Exists(shared_links),
            )
            .filter(
                Q(owned_by=user, has_project_access=True) | Q(access=Page.PUBLIC_ACCESS, has_full_project_access=True),
            )
            .prefetch_related("projects")
        )

    def get(self, request, slug, page_id=None):
        queryset = self.get_queryset()
        if page_id is not None:
            page = queryset.filter(pk=page_id).first()
            if page is None:
                raise NotFound("Page not found.")
            return Response(APIPageDetailSerializer(page).data)
        return self.paginate_pages(request, queryset)
