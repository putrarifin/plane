/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import type { ReactNode } from "react";
import { EAuthModes, PRIVACY_URL, SOURCE_LICENSE_URL, SOURCE_REPOSITORY_URL, TERMS_URL } from "@plane/constants";

interface TermsAndConditionsProps {
  authType?: EAuthModes;
}

const MESSAGES = {
  [EAuthModes.SIGN_UP]: "By creating an account",
  [EAuthModes.SIGN_IN]: "By signing in",
} as const;

// Reusable link component to reduce duplication
function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-secondary" target="_blank" rel="noopener noreferrer">
      <span className="text-13 font-medium underline hover:cursor-pointer">{children}</span>
    </a>
  );
}

export function TermsAndConditions({ authType = EAuthModes.SIGN_IN }: TermsAndConditionsProps) {
  return (
    <div className="flex items-center justify-center">
      <p className="text-center text-13 whitespace-pre-line text-tertiary">
        {`${MESSAGES[authType]}, you confirm that you are authorized to access this workspace`}
        {TERMS_URL && (
          <>
            {" and agree to "}
            <LegalLink href={TERMS_URL}>Terms of Service</LegalLink>
          </>
        )}
        {PRIVACY_URL && (
          <>
            {" and "}
            <LegalLink href={PRIVACY_URL}>Privacy Policy</LegalLink>
          </>
        )}
        .
        <br />
        Pranala Work is a modified version of Plane and remains available under the AGPL-3.0 license.{" "}
        <LegalLink href={SOURCE_REPOSITORY_URL}>Source code</LegalLink> ·{" "}
        <LegalLink href={SOURCE_LICENSE_URL}>License</LegalLink>.
      </p>
    </div>
  );
}
