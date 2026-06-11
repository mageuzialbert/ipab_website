"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-entrance wrapper per DESIGN_SYSTEM.md: opacity 0→1 + y 12→0,
 * 0.4s, once only. Pass `delay={i * 0.08}` to stagger siblings.
 * Renders static for prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-48px" }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
