/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { PlaneLogo } from "@plane/propel/icons";

export function LogoSpinner() {
  return (
    <div className="flex items-center justify-center">
      <PlaneLogo className="h-6 w-auto animate-pulse text-accent-primary sm:h-11" />
    </div>
  );
}
