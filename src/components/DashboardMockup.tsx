/**
 * Stylized SmartPoint dashboard, modeled on the real iPAB dashboard
 * (owner's screenshot, June 2026): welcome header + date range, colorful
 * KPI cards, 30-day sales curve. Numbers are illustrative mockup UI.
 * Hidden from screen readers; it's a visual illustration.
 *
 * The chart is a fixed-viewBox SVG on purpose; percentage-height flex
 * bars rendered empty in Safari.
 */

const CURVE_POINTS =
  "0,55 12,42 24,28 36,33 48,38 60,30 72,26 84,40 96,44 108,48 120,36 132,52 144,50 156,42 168,46 180,32 192,35 204,28 216,30 228,44 240,30 252,26 264,38 276,18";

const KPIS = [
  {
    label: "Total Sales",
    value: "TSh 49,071,985",
    bg: "#0c6e8e",
  },
  {
    label: "Wholesale Sales",
    value: "2,169 Invoices",
    sub: "TSh 48,286,868",
    bg: "#4f39c8",
  },
  {
    label: "Retail Sales",
    value: "114 Invoices",
    sub: "TSh 785,116",
    bg: "#0f766e",
  },
  {
    label: "Net",
    value: "TSh 49,031,104",
    bg: "#166534",
  },
];

export default function DashboardMockup() {
  return (
    <div aria-hidden="true" className="relative select-none">
      {/* Window frame */}
      <div className="overflow-hidden rounded-2xl border border-slate/10 bg-card shadow-lift">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-slate/10 bg-surface-2 px-4 py-3">
          <span className="size-2.5 rounded-full bg-slate/20" />
          <span className="size-2.5 rounded-full bg-slate/20" />
          <span className="size-2.5 rounded-full bg-slate/20" />
          <span className="ml-3 text-xs font-medium text-slate">
            SmartPoint; Dashboard
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-green/10 px-2.5 py-0.5 text-[11px] font-semibold text-green">
            <span className="size-1.5 rounded-full bg-green" />
            Live
          </span>
        </div>

        <div className="space-y-3 p-4 sm:p-5">
          {/* Welcome + date range */}
          <div className="flex items-center justify-between gap-3">
            <p className="font-display text-base font-bold text-blue">
              Welcome, Issa 👋
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate/15 px-2.5 py-1.5 text-[10px] font-medium text-slate">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                className="size-3"
              >
                <rect x="2" y="3" width="12" height="11" rx="2" />
                <path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3" />
              </svg>
              05/01/2026 ~ 05/31/2026
            </span>
          </div>

          {/* KPI cards; colors mirror the real product */}
          <div className="grid grid-cols-2 gap-2.5">
            {KPIS.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl p-3 text-white"
                style={{ backgroundColor: kpi.bg }}
              >
                <p className="text-[10px] font-medium text-white/80">
                  {kpi.label}
                </p>
                <p className="mt-0.5 font-display text-sm font-bold sm:text-base">
                  {kpi.value}
                </p>
                {kpi.sub && (
                  <p className="text-[10px] text-white/70">
                    Sales value: {kpi.sub}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* 30-day sales curve */}
          <div className="rounded-xl border border-slate/10 p-3.5">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-medium text-slate">
                Sales, last 30 days
              </p>
              <p className="text-[10px] text-slate/70">Amount (TZS)</p>
            </div>
            <svg viewBox="0 0 280 80" className="h-24 w-full">
              {/* baseline grid */}
              <line
                x1="0"
                y1="79"
                x2="280"
                y2="79"
                className="stroke-slate/20"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="40"
                x2="280"
                y2="40"
                className="stroke-slate/10"
                strokeWidth="1"
              />
              <polygon
                points={`${CURVE_POINTS} 276,80 0,80`}
                className="fill-blue/15"
              />
              <polyline
                points={CURVE_POINTS}
                fill="none"
                className="stroke-blue"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <circle cx="276" cy="18" r="3" className="fill-blue" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating stock alert */}
      <div className="absolute -left-3 bottom-14 hidden w-56 rounded-xl border border-amber/40 bg-card p-3 shadow-lift sm:block md:-left-8">
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-3.5"
            >
              <path d="M12 9v4M12 17h.01" />
              <path d="M10.3 4.5 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.5a2 2 0 0 0-3.4 0z" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-semibold text-ink">Stock alert</p>
            <p className="text-[11px] leading-snug text-slate">
              Sugar 1kg below minimum; 4 left
            </p>
          </div>
        </div>
      </div>

      {/* Floating product expiry alert */}
      <div className="absolute -right-3 top-44 hidden w-56 rounded-xl border border-red-500/40 bg-card p-3 shadow-lift sm:block md:-right-8">
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-500">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-3.5"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-semibold text-ink">Expiry alert</p>
            <p className="text-[11px] leading-snug text-slate">
              Fresh milk 500ml; 18 expiring in 3 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
