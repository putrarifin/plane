/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { PRODUCT_NAME, PRODUCT_FORMAL_NAME, SOURCE_BRANCH } from "../../packages/constants/src/brand.ts";
import {
  createMermaidRenderId,
  isMermaidLanguage,
} from "../../packages/editor/src/core/extensions/code/mermaid-utils.ts";

const locale = (name) =>
  JSON.parse(readFileSync(new URL(`../../packages/i18n/src/locales/id/${name}.json`, import.meta.url)));

test("the upgraded distribution retains its Pranala identity and source reference", () => {
  assert.equal(PRODUCT_NAME, "Pranala");
  assert.equal(PRODUCT_FORMAL_NAME, "Pranala Work");
  assert.equal(SOURCE_BRANCH, "codex/upgrade-plane-v1.4.2");
});

test("Indonesian navigation and account actions survive the namespace migration", () => {
  assert.equal(locale("navigation").sidebar.projects, "Projek");
  assert.equal(locale("navigation").sidebar.new_work_item, "Item kerja baru");
  assert.equal(locale("common").save_changes, "Simpan perubahan");
  assert.equal(locale("common").cancel, "Batal");
  assert.equal(locale("accessibility").aria_labels.projects_sidebar.open_workspace_switcher, "Buka pengalih workspace");
  assert.equal(locale("empty-state").project_empty_state.pages.cta_primary, "Buat halaman pertama Anda");
});

test("Mermaid language detection accepts normalized code block labels", () => {
  assert.equal(isMermaidLanguage(" Mermaid "), true);
  assert.equal(isMermaidLanguage("typescript"), false);
  assert.equal(isMermaidLanguage(null), false);
});

test("Mermaid render IDs are valid for SVG selectors, including React useId values", () => {
  assert.equal(createMermaidRenderId(":r7:"), "plane-mermaid-r7");
  assert.equal(createMermaidRenderId(""), "plane-mermaid-diagram");
  assert.match(createMermaidRenderId("a b/<script>"), /^[a-zA-Z][a-zA-Z0-9_-]*$/);
});
