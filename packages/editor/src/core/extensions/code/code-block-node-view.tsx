/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import type { NodeViewProps } from "@tiptap/react";
import ts from "highlight.js/lib/languages/typescript";
import { common, createLowlight } from "lowlight";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { CopyIcon } from "@plane/propel/icons";
// ui
import { Tooltip } from "@plane/propel/tooltip";
// plane utils
import { cn } from "@plane/utils";
// local imports
import { MermaidRenderer } from "./mermaid-renderer";
import { isMermaidLanguage } from "./mermaid-utils";
// types
import type { TCodeBlockAttributes } from "./types";
import { ECodeBlockAttributeNames } from "./types";

// we just have ts support for now
const lowlight = createLowlight(common);
lowlight.register("ts", ts);

type Props = Pick<NodeViewProps, "editor" | "node">;

export function CodeBlockComponent({ editor, node }: Props) {
  const [copied, setCopied] = useState(false);
  const [showDiagram, setShowDiagram] = useState(true);
  // derived values
  const attrs = node.attrs as TCodeBlockAttributes;
  const isMermaid = isMermaidLanguage(attrs[ECodeBlockAttributeNames.LANGUAGE]);

  const copyToClipboard = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      await navigator.clipboard.writeText(node.textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch {
      setCopied(false);
    }
    e.preventDefault();
    e.stopPropagation();
  };

  const toggleDiagram = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDiagram((value) => !value);
  };

  return (
    <NodeViewWrapper key={attrs[ECodeBlockAttributeNames.ID]} className="code-block group/code relative">
      <div className="pointer-events-none absolute top-2 right-2 z-10 flex items-center gap-1 opacity-0 transition-opacity group-focus-within/code:pointer-events-auto group-focus-within/code:opacity-100 group-hover/code:pointer-events-auto group-hover/code:opacity-100 max-md:pointer-events-auto max-md:opacity-100">
        {isMermaid && editor.isEditable && (
          <button
            type="button"
            className="rounded-md border border-subtle bg-layer-1 px-2 py-1.5 text-11 font-medium text-tertiary backdrop-blur-sm transition hover:bg-layer-2 hover:text-primary active:translate-y-px"
            onClick={toggleDiagram}
            aria-label={showDiagram ? "Show Mermaid source" : "Show Mermaid diagram"}
          >
            {showDiagram ? "Code" : "Diagram"}
          </button>
        )}
        <Tooltip tooltipContent="Copy code">
          <button
            type="button"
            className={cn(
              "group/button flex size-8 items-center justify-center rounded-md border border-subtle bg-layer-1 backdrop-blur-sm transition duration-150 ease-in-out",
              {
                "bg-success-subtle hover:bg-success-subtle-1 active:bg-success-subtle-1": copied,
              }
            )}
            onClick={(e) => void copyToClipboard(e)}
          >
            {copied ? (
              <CheckIcon className="h-3 w-3 text-success-primary" strokeWidth={3} />
            ) : (
              <CopyIcon className="h-3 w-3 text-tertiary group-hover/button:text-primary" />
            )}
          </button>
        </Tooltip>
      </div>

      {isMermaid && showDiagram && <MermaidRenderer code={node.textContent} />}
      <div className={cn(isMermaid && showDiagram && "hidden")}>
        <pre className="my-2 rounded-lg bg-layer-3 p-4 text-primary">
          <NodeViewContent as="code" className="whitespace-pre-wrap" />
        </pre>
      </div>
    </NodeViewWrapper>
  );
}
