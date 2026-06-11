import type { ReactNode } from "react";

/**
 * Shared window chrome for coded product mockups (DESIGN_SYSTEM.md:
 * rounded-2xl frame, subtle shadow, stylized but readable).
 */
export default function MockupFrame({
  title,
  badge,
  children,
}: {
  title: string;
  badge?: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate/10 bg-card shadow-lift">
      <div className="flex items-center gap-2 border-b border-slate/10 bg-surface-2 px-4 py-3">
        <span className="size-2.5 rounded-full bg-slate/20" />
        <span className="size-2.5 rounded-full bg-slate/20" />
        <span className="size-2.5 rounded-full bg-slate/20" />
        <span className="ml-3 text-xs font-medium text-slate">{title}</span>
        {badge && (
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-green/10 px-2.5 py-0.5 text-[11px] font-semibold text-green">
            <span className="size-1.5 rounded-full bg-green" />
            {badge}
          </span>
        )}
      </div>
      <div className="space-y-3 p-4 sm:p-5">{children}</div>
    </div>
  );
}
