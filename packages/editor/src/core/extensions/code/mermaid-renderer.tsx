/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { useEffect, useId, useState } from "react";
// plane utils
import { cn } from "@plane/utils";
// local imports
import { createMermaidRenderId } from "./mermaid-utils";

type Props = {
  code: string;
};

type RenderState =
  | { status: "loading" }
  | { status: "empty" }
  | { status: "success"; svg: string }
  | { status: "error"; message: string };

type MermaidModule = typeof import("mermaid").default;

let mermaidPromise: Promise<MermaidModule> | undefined;

function loadMermaid() {
  mermaidPromise ??= import("mermaid").then((module) => module.default);
  return mermaidPromise;
}

function getThemeVariables(isDark: boolean) {
  return isDark
    ? {
        background: "transparent",
        primaryColor: "#313846",
        primaryTextColor: "#f3f4f6",
        primaryBorderColor: "#818b9d",
        lineColor: "#aeb7c5",
        secondaryColor: "#242a35",
        secondaryTextColor: "#f3f4f6",
        secondaryBorderColor: "#687386",
        tertiaryColor: "#1b2029",
        tertiaryTextColor: "#f3f4f6",
        tertiaryBorderColor: "#566174",
        noteBkgColor: "#343c4b",
        noteTextColor: "#f3f4f6",
        textColor: "#f3f4f6",
      }
    : {
        background: "transparent",
        primaryColor: "#eef1f5",
        primaryTextColor: "#1f2937",
        primaryBorderColor: "#7b8798",
        lineColor: "#667085",
        secondaryColor: "#f7f8fa",
        secondaryTextColor: "#1f2937",
        secondaryBorderColor: "#98a2b3",
        tertiaryColor: "#ffffff",
        tertiaryTextColor: "#1f2937",
        tertiaryBorderColor: "#b7c0cd",
        noteBkgColor: "#fff7d6",
        noteTextColor: "#1f2937",
        textColor: "#1f2937",
      };
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  return "Mermaid could not parse this diagram.";
}

export function MermaidRenderer({ code }: Props) {
  const id = useId();
  const [isDark, setIsDark] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const [state, setState] = useState<RenderState>({ status: "loading" });

  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    const updateTheme = () => setIsDark(root.classList.contains("dark"));
    const observer = new MutationObserver(updateTheme);

    updateTheme();
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;

    if (!code.trim()) {
      setState({ status: "empty" });
      return () => {
        cancelled = true;
      };
    }

    setState({ status: "loading" });

    const renderDiagram = async () => {
      try {
        const mermaid = await loadMermaid();
        if (cancelled) return;

        mermaid.initialize({
          darkMode: isDark,
          fontFamily: "inherit",
          htmlLabels: false,
          secure: ["securityLevel", "startOnLoad", "theme", "themeVariables", "htmlLabels"],
          securityLevel: "strict",
          startOnLoad: false,
          theme: "base",
          themeVariables: getThemeVariables(isDark),
        });

        const { svg } = await mermaid.render(createMermaidRenderId(id), code);
        if (cancelled) return;

        setState({ status: "success", svg });
      } catch (error) {
        if (!cancelled) {
          setState({ status: "error", message: getErrorMessage(error) });
        }
      }
    };

    void renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [code, id, isDark, retryKey]);

  if (state.status === "loading") {
    return (
      <div
        className="my-2 flex min-h-24 items-center justify-center rounded-lg border border-subtle bg-layer-3 p-4"
        role="status"
      >
        <span className="text-13 text-tertiary">Rendering Mermaid diagram...</span>
      </div>
    );
  }

  if (state.status === "empty") {
    return (
      <div className="my-2 rounded-lg border border-subtle bg-layer-3 p-4 text-13 text-tertiary" role="status">
        Add Mermaid source to render a diagram.
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="my-2 rounded-lg border border-danger-subtle bg-danger-subtle p-4 text-13" role="alert">
        <p className="font-medium text-danger-primary">Mermaid diagram could not be rendered.</p>
        <p className="mt-1 text-tertiary">{state.message}</p>
        <pre className="mt-3 max-h-80 overflow-auto rounded-md bg-layer-1 p-3 text-12 whitespace-pre-wrap text-primary">
          <code>{code}</code>
        </pre>
        <button
          type="button"
          className="mt-3 rounded-md border border-subtle bg-layer-1 px-2.5 py-1.5 text-13 font-medium text-primary transition hover:bg-layer-2 active:translate-y-px"
          onClick={() => setRetryKey((value) => value + 1)}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "my-2 flex min-h-24 items-center justify-center overflow-x-auto rounded-lg border border-subtle bg-layer-3 p-4",
        "[&>div>svg]:mx-auto [&>div>svg]:h-auto [&>div>svg]:max-w-full"
      )}
      role="img"
      aria-label="Mermaid diagram"
    >
      {/* Mermaid sanitizes generated SVG internally in strict security mode. */}
      <div className="w-full" dangerouslySetInnerHTML={{ __html: state.svg }} />
    </div>
  );
}
