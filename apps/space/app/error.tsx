/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

// ui
import { Button } from "@plane/propel/button";
import { SOURCE_ISSUES_URL, SOURCE_REPOSITORY_URL, SUPPORT_EMAIL } from "@plane/constants";

function ErrorPage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="grid h-screen place-items-center bg-surface-1 p-4">
      <div className="space-y-8 text-center">
        <div className="space-y-2">
          <h3 className="text-16 font-semibold">Yikes! That doesn{"'"}t look good.</h3>
          <p className="mx-auto text-13 text-secondary md:w-1/2">
            That crashed Pranala. Our engineers have been notified. If you have more details, please{" "}
            {SUPPORT_EMAIL ? (
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-primary">
                contact support
              </a>
            ) : (
              <a href={SOURCE_ISSUES_URL} target="_blank" className="text-accent-primary" rel="noopener noreferrer">
                report an issue
              </a>
            )}{" "}
            or review the{" "}
            <a href={SOURCE_REPOSITORY_URL} target="_blank" className="text-accent-primary" rel="noopener noreferrer">
              source code
            </a>
            .
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button variant="primary" size="lg" onClick={handleRetry}>
            Refresh
          </Button>
          {/* <Button variant="secondary" size="lg" onClick={() => {}}>
            Sign out
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
