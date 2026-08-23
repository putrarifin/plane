/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import * as React from "react";

import type { ISvgIcons } from "../type";

export function PlaneLockup({ width = "253", height = "53", className, color = "currentColor" }: ISvgIcons) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 253 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Pranala"
    >
      <g fill="none" stroke={color} strokeWidth="7" strokeLinecap="round">
        <path d="M13 16H35C41.627 16 47 21.373 47 28C47 34.627 41.627 40 35 40H13C6.373 40 1 34.627 1 28C1 21.373 6.373 16 13 16Z" />
        <path d="M50 12H72C78.627 12 84 17.373 84 24C84 30.627 78.627 36 72 36H50C43.373 36 38 30.627 38 24C38 17.373 43.373 12 50 12Z" />
        <path d="M35 28H50" />
      </g>
      <text
        x="99"
        y="37"
        fill={color}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="35"
        fontWeight="650"
        letterSpacing="-1.2"
      >
        Pranala
      </text>
    </svg>
  );
}
