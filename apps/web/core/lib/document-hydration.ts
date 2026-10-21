/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

export function prepareDocumentForHydration(document: Document): () => void {
  // Extensions can insert controls as siblings of <head>/<body>. React 18
  // hydrates the whole document and rejects those invalid <html> children.
  // Keep the same elements alive inside body until the first commit completes.
  const preserveElements = () => {
    for (const element of Array.from(document.documentElement.children)) {
      if (element !== document.head && element !== document.body) document.body.appendChild(element);
    }
  };
  const observer = new MutationObserver(preserveElements);
  observer.observe(document.documentElement, { childList: true });
  preserveElements();
  return () => observer.disconnect();
}
