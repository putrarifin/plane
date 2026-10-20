/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { SOURCE_LICENSE_URL, SOURCE_REPOSITORY_URL } from "@plane/constants";
// ui
import { getButtonStyling } from "@plane/propel/button";
import { PlaneLogo } from "@plane/propel/icons";
// helpers
import { cn } from "@plane/utils";

export function ProductUpdatesFooter() {
  return (
    <div className="m-6 mb-4 flex flex-shrink-0 items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <a
          href={SOURCE_REPOSITORY_URL}
          target="_blank"
          className="text-13 text-secondary underline-offset-1 outline-none hover:text-primary hover:underline"
          rel="noreferrer"
        >
          Source code
        </a>
        <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current" aria-hidden="true">
          <circle cx={1} cy={1} r={1} />
        </svg>
        <a
          href={SOURCE_LICENSE_URL}
          target="_blank"
          className="text-13 text-secondary underline-offset-1 outline-none hover:text-primary hover:underline"
          rel="noreferrer"
        >
          AGPL-3.0 license
        </a>
      </div>
      <a
        href={SOURCE_REPOSITORY_URL}
        target="_blank"
        className={cn(
          getButtonStyling("secondary", "base"),
          "flex items-center gap-1.5 text-center font-medium underline-offset-2 outline-none hover:underline"
        )}
        rel="noreferrer"
      >
        <PlaneLogo className="h-4 w-auto text-primary" aria-label="Pranala" />
        Pranala Work
      </a>
    </div>
  );
}
