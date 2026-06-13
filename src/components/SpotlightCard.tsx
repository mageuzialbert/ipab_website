"use client";

import type { MouseEvent, ReactNode } from "react";

/**
 * Mouse-following spotlight hover for cards (DESIGN_SYSTEM.md "Glows &
 * gradients" rule 2). Writes CSS vars directly — no state, no re-renders.
 * Hover-only, so touch devices and reduced-motion users never see it.
 */
export default function SpotlightCard({
  children,
  className = "",
  spotColor = "rgb(27 109 243 / 0.07)",
}: {
  children: ReactNode;
  className?: string;
  spotColor?: string;
}) {
  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative h-full ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${spotColor}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}
