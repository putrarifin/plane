/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

type Props = {
  isSignUp?: boolean;
};

import { PRIVACY_URL, SOURCE_LICENSE_URL, SOURCE_REPOSITORY_URL, TERMS_URL } from "@plane/constants";

export function TermsAndConditions(props: Props) {
  const { isSignUp = false } = props;
  return (
    <span className="flex items-center justify-center py-6">
      <p className="text-center text-13 whitespace-pre-line text-secondary">
        {isSignUp ? "By creating an account" : "By signing in"}, you confirm that you are authorized to access this
        workspace
        {TERMS_URL && (
          <>
            {" and agree to "}
            <a href={TERMS_URL} target="_blank" rel="noopener noreferrer">
              <span className="text-13 font-medium underline hover:cursor-pointer">Terms of Service</span>
            </a>
          </>
        )}
        {PRIVACY_URL && (
          <>
            {" and "}
            <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">
              <span className="text-13 font-medium underline hover:cursor-pointer">Privacy Policy</span>
            </a>
          </>
        )}
        .
        <br />
        Pranala Work is a modified version of Plane and remains available under the AGPL-3.0 license.{" "}
        <a href={SOURCE_REPOSITORY_URL} target="_blank" rel="noopener noreferrer">
          <span className="text-13 font-medium underline hover:cursor-pointer">Source code</span>
        </a>{" "}
        ·{" "}
        <a href={SOURCE_LICENSE_URL} target="_blank" rel="noopener noreferrer">
          <span className="text-13 font-medium underline hover:cursor-pointer">License</span>
        </a>
        .
      </p>
    </span>
  );
}
