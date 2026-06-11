"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts 0 → target over `durationMs` once the returned ref scrolls into
 * view. Jumps straight to target for prefers-reduced-motion.
 */
export function useCountUp(target: number, durationMs = 1000) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setValue(target);
          return;
        }

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          // ease-out cubic
          setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, durationMs]);

  return { ref, value };
}
