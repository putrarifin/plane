/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

export function LogoSpinner() {
  return (
    <div className="flex items-center justify-center">
      <img
        src="/pranala-mark.svg"
        alt=""
        aria-hidden="true"
        className="size-6 animate-pulse object-contain sm:size-11"
      />
    </div>
  );
}
