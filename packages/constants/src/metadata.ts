/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { PRODUCT_DESCRIPTION, PRODUCT_FORMAL_NAME, PRODUCT_NAME, PRODUCT_TAGLINE } from "./brand";

export const SITE_NAME = PRODUCT_FORMAL_NAME;
export const SITE_TITLE = `${PRODUCT_FORMAL_NAME} | ${PRODUCT_TAGLINE}`;
export const SITE_DESCRIPTION = PRODUCT_DESCRIPTION;
export const SITE_KEYWORDS =
  "software development, plan, ship, software, accelerate, code management, release management, project management, work items tracking, agile, scrum, kanban, collaboration";
export const SITE_URL = process.env.VITE_WEB_BASE_URL || "";
export const TWITTER_USER_NAME = PRODUCT_NAME;

// Pranala published workspace metadata
export const SPACE_SITE_NAME = `${PRODUCT_FORMAL_NAME} | Published workspace`;
export const SPACE_SITE_TITLE = `${PRODUCT_FORMAL_NAME} | Published workspace`;
export const SPACE_SITE_DESCRIPTION = "Published workspaces from Pranala Work.";
export const SPACE_SITE_KEYWORDS =
  "software development, customer feedback, software, accelerate, code management, release management, project management, work items tracking, agile, scrum, kanban, collaboration";
export const SPACE_SITE_URL = process.env.VITE_SPACE_BASE_URL || "";
export const SPACE_TWITTER_USER_NAME = PRODUCT_NAME;
