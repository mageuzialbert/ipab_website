import type { Lang } from "@/lib/i18n";

export type Stat = {
  /** Numeric target for the animated counter. */
  value: number;
  /** Rendered before the number, e.g. "TZS ". */
  prefix?: string;
  /** Rendered after the counter in amber, e.g. "+", "K", "M". */
  suffix?: string;
  /** Full label, e.g. "businesses run on iPAB". */
  label: string;
  /** Supporting line that makes the number land. */
  detail?: string;
};

export const STATS_HEADING: Record<Lang, { eyebrow: string; heading: string }> =
  {
    en: { eyebrow: "iPAB in numbers", heading: "Every day on iPAB." },
    sw: { eyebrow: "iPAB kwa namba", heading: "Kila siku kwenye iPAB." },
  };

/** Platform numbers provided by the owner, June 2026. */
export const STATS: Record<Lang, Stat[]> = {
  en: [
    {
      value: 1220,
      suffix: "+",
      label: "businesses run on iPAB",
      detail: "from pharmacies to colleges",
    },
    {
      value: 9000,
      suffix: "+",
      label: "daily active users",
      detail: "owners, managers, and staff",
    },
    {
      value: 57,
      suffix: "K",
      label: "invoices created daily",
      detail: "about 40 every minute",
    },
    {
      value: 600,
      prefix: "TZS ",
      suffix: "M",
      label: "in daily transactions",
      detail: "that's TZS 25M every hour",
    },
  ],
  sw: [
    {
      value: 1220,
      suffix: "+",
      label: "biashara zinatumia iPAB",
      detail: "kuanzia maduka ya dawa hadi vyuo",
    },
    {
      value: 9000,
      suffix: "+",
      label: "watumiaji hai kila siku",
      detail: "wamiliki, mameneja, na wafanyakazi",
    },
    {
      value: 57,
      suffix: "K",
      label: "ankara zinatengenezwa kila siku",
      detail: "takriban 40 kila dakika",
    },
    {
      value: 600,
      prefix: "TZS ",
      suffix: "M",
      label: "miamala ya kila siku",
      detail: "sawa na TZS 25M kila saa",
    },
  ],
};
