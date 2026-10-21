/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { LogoSpinner } from "./logo-spinner";

export function HydrationFallback() {
  // The static SPA shell and the first browser render must be identical.
  // The Pranala mark is theme-neutral; CSS applies the selected theme.
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-canvas">
      <LogoSpinner />
    </div>
  );
}
