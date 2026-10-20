/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

export const MERMAID_LANGUAGE = "mermaid";

export function isMermaidLanguage(language: string | null | undefined): boolean {
  return language?.trim().toLowerCase() === MERMAID_LANGUAGE;
}

export function createMermaidRenderId(seed: string): string {
  const normalizedSeed = seed.replace(/[^a-zA-Z0-9_-]/g, "");
  return `plane-mermaid-${normalizedSeed || "diagram"}`;
}
