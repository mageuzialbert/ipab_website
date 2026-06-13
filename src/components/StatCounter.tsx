"use client";

import { useCountUp } from "@/hooks/useCountUp";
import type { Stat } from "@/content/stats";

export default function StatCounter({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <div className="text-center">
      <p className="whitespace-nowrap font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
        {stat.prefix && (
          <span className="mr-1 text-2xl font-semibold text-white/70 md:text-3xl">
            {stat.prefix}
          </span>
        )}
        <span ref={ref} className="text-gradient-stat">
          {value.toLocaleString("en-US")}
        </span>
        {stat.suffix && <span className="text-amber">{stat.suffix}</span>}
      </p>
      <p className="mt-3 font-medium text-white/80">{stat.label}</p>
      {stat.detail && (
        <p className="mt-1 text-sm text-white/50">{stat.detail}</p>
      )}
    </div>
  );
}
