import type { Lang } from "@/lib/i18n";

export type Testimonial = {
  quote: string;
  name: string;
  business: string;
  /** One measurable result, e.g. "losses down 40% in 3 months". */
  result?: string;
};

/**
 * TODO: collect 3 real quotes (name, business, one measurable result each).
 * NEVER invent client names or testimonials. While these arrays are empty,
 * the Testimonials section stays hidden; do not launch with fake ones.
 */
export const TESTIMONIALS: Record<Lang, Testimonial[]> = {
  en: [],
  sw: [],
};
