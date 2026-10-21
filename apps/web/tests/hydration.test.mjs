/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import test from "node:test";
import { build } from "esbuild";
import { JSDOM } from "jsdom";

const webRoot = dirname(dirname(fileURLToPath(import.meta.url)));

test("the build-time fallback hydrates with a saved light or dark theme", async () => {
  const directory = mkdtempSync(join(webRoot, ".hydration-test-"));
  const bundle = join(directory, "fallback.mjs");
  try {
    await build({
      entryPoints: [join(webRoot, "core/components/common/hydration-fallback.tsx")],
      outfile: bundle,
      bundle: true,
      packages: "external",
      platform: "node",
      format: "esm",
      jsx: "automatic",
      logLevel: "silent",
    });

    // A separate server process is essential: next-themes detects its runtime
    // when imported. Reusing the browser copy for SSR would miss the real bug.
    const serverScript = `
      import React from 'react';
      import { renderToString } from 'react-dom/server';
      import { ThemeProvider } from 'next-themes';
      import { HydrationFallback } from ${JSON.stringify(pathToFileURL(bundle).href)};
      process.stdout.write(renderToString(React.createElement(ThemeProvider,
        { defaultTheme: 'system' }, React.createElement(HydrationFallback))));
    `;
    const html = execFileSync(process.execPath, ["--input-type=module", "-e", serverScript], {
      cwd: webRoot,
      encoding: "utf8",
    });

    const checkTheme = async (theme) => {
      const dom = new JSDOM(`<div id="root">${html}</div>`, { url: "https://pranala.test/" });
      dom.window.localStorage.setItem("theme", theme);
      dom.window.matchMedia = () => ({
        matches: theme === "dark",
        addListener: () => null,
        removeListener: () => null,
      });
      globalThis.window = dom.window;
      globalThis.document = dom.window.document;
      globalThis.localStorage = dom.window.localStorage;
      globalThis.IS_REACT_ACT_ENVIRONMENT = true;
      const React = await import("react");
      const { hydrateRoot } = await import("react-dom/client");
      const { ThemeProvider } = await import("next-themes");
      const { HydrationFallback } = await import(pathToFileURL(bundle).href);
      const errors = [];
      let root;
      await React.act(async () => {
        root = hydrateRoot(
          dom.window.document.getElementById("root"),
          React.createElement(ThemeProvider, { defaultTheme: "system" }, React.createElement(HydrationFallback)),
          { onRecoverableError: (error) => errors.push(error.message) }
        );
      });
      try {
        assert.deepEqual(errors, [], `hydration must match with the saved ${theme} theme`);
        assert.equal(dom.window.document.querySelector("img")?.getAttribute("src"), "/pranala-mark.svg");
      } finally {
        await React.act(async () => root.unmount());
        dom.window.close();
      }
    };
    // Each hydration owns the browser globals; running the themes concurrently
    // would test cross-window interference instead of the SPA fallback.
    await checkTheme("light");
    await checkTheme("dark");
  } finally {
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.localStorage;
    delete globalThis.IS_REACT_ACT_ENVIRONMENT;
    rmSync(directory, { recursive: true, force: true });
  }
});
