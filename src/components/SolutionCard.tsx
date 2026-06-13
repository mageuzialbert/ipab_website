import Link from "next/link";
import SolutionIcon from "@/components/SolutionIcon";
import type { Solution } from "@/content/solutions";
import { UI, localeHref, type Lang } from "@/lib/i18n";

export default function SolutionCard({
  solution,
  lang = "en",
  featured = false,
}: {
  solution: Solution;
  lang?: Lang;
  /** Flagship treatment: gradient hairline border (max one per section) */
  featured?: boolean;
}) {
  return (
    <Link
      href={localeHref(lang, `/solutions/${solution.slug}`)}
      className={`group flex h-full flex-col rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lift ${
        featured
          ? "gradient-border-card"
          : "border border-slate/10 bg-card"
      }`}
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-blue/10 text-blue">
        <SolutionIcon slug={solution.slug} className="size-5.5" />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-heading">
        {solution.name}
      </h3>
      <p className="mt-2 font-medium text-ink">{solution.tagline}</p>
      <p className="mt-2 text-sm text-slate">
        {UI[lang].for}: {solution.audience}
      </p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-blue">
        {UI[lang].see} {solution.name}
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
