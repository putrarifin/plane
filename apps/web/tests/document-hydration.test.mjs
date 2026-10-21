/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import test from "node:test";
import { build } from "esbuild";
import { JSDOM } from "jsdom";

const webRoot = dirname(dirname(fileURLToPath(import.meta.url)));

test("document hydration preserves browser elements inserted outside body", async () => {
  const directory = mkdtempSync(join(webRoot, ".document-hydration-test-"));
  const bundle = join(directory, "document-hydration.mjs");
  try {
    await build({
      entryPoints: [join(webRoot, "core/lib/document-hydration.ts")],
      outfile: bundle,
      bundle: true,
      platform: "node",
      format: "esm",
      logLevel: "silent",
    });
    const { prepareDocumentForHydration } = await import(pathToFileURL(bundle).href);

    const checkInsertion = async (duringHydration) => {
      const dom = new JSDOM(
        "<!doctype html><html><head><title>Pranala</title></head><body><div>Pranala</div></body></html>"
      );
      globalThis.window = dom.window;
      globalThis.document = dom.window.document;
      globalThis.MutationObserver = dom.window.MutationObserver;
      globalThis.IS_REACT_ACT_ENVIRONMENT = true;
      const React = await import("react");
      const { hydrateRoot } = await import("react-dom/client");
      const doc = dom.window.document;
      const foreign = doc.createElement(duringHydration ? "browser-toolbar" : "div");
      foreign.textContent = "Extension controls";
      if (!duringHydration) doc.documentElement.appendChild(foreign);
      const stop = prepareDocumentForHydration(doc);
      const errors = [];
      function BrowserDocument() {
        React.useEffect(() => {
          stop();
        }, []);
        return React.createElement(
          "html",
          null,
          React.createElement("head", null, React.createElement("title", null, "Pranala")),
          React.createElement("body", null, React.createElement("div", null, "Pranala"))
        );
      }
      let root;
      try {
        await React.act(async () => {
          root = hydrateRoot(doc, React.createElement(BrowserDocument), {
            onRecoverableError: (error) => errors.push(error.message),
          });
          if (duringHydration) doc.documentElement.appendChild(foreign);
          await new Promise((resolve) => queueMicrotask(resolve));
        });
        assert.deepEqual(errors, [], "extension insertion must not replace the application root");
        assert.equal(foreign.parentElement, doc.body);
        assert.equal(foreign.textContent, "Extension controls");
        assert.equal(doc.body.firstElementChild.textContent, "Pranala");

        const later = doc.createElement("div");
        doc.documentElement.appendChild(later);
        await new Promise((resolve) => queueMicrotask(resolve));
        assert.equal(later.parentElement, doc.documentElement, "observation ends after the first React commit");
        later.remove();
      } finally {
        stop();
        if (root) await React.act(async () => root.unmount());
        dom.window.close();
      }
    };
    await checkInsertion(false);
    await checkInsertion(true);
  } finally {
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.MutationObserver;
    delete globalThis.IS_REACT_ACT_ENVIRONMENT;
    rmSync(directory, { recursive: true, force: true });
  }
});
