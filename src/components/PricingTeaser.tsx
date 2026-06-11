import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PRICING_TEASER } from "@/content/home";
import { localeHref, type Lang } from "@/lib/i18n";

/** Transparency = trust: lead with the real number, link to full pricing. */
export default function PricingTeaser({ lang = "en" }: { lang?: Lang }) {
  const teaser = PRICING_TEASER[lang];

  return (
    <section className="bg-surface-2 py-16 md:py-24">
      <div className="container-site max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow">{teaser.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 text-balance font-display text-h2-sm font-bold text-heading md:text-h2">
            {teaser.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 text-slate">{teaser.body}</p>
        </Reveal>
        <Reveal delay={0.24}>
          <Link
            href={localeHref(lang, "/pricing")}
            className="mt-8 inline-flex items-center justify-center rounded-xl border border-heading/20 px-7 py-3.5 font-semibold text-heading transition-colors duration-200 hover:border-heading/50"
          >
            {teaser.cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
