import CTABand from "@/components/CTABand";
import FieldGallery from "@/components/FieldGallery";
import Reveal from "@/components/Reveal";
import { FINAL_CTA } from "@/content/home";
import { WHY_GALLERY } from "@/content/photos";
import { SITE } from "@/content/site";
import { WHY } from "@/content/why";
import type { Lang } from "@/lib/i18n";

const EYEBROW: Record<Lang, string> = {
  en: "Why iPAB",
  sw: "Kwa nini iPAB",
};

export default function WhyView({ lang }: { lang: Lang }) {
  const why = WHY[lang];

  return (
    <>
      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container-site max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">{EYEBROW[lang]}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 text-balance font-display text-display-sm font-bold text-heading md:text-display">
              {why.h1}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-left text-slate md:text-center">
              {why.story}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Centerpiece quote */}
      <section className="dot-grid-dark bg-navy py-20 md:py-28">
        <div className="container-site max-w-4xl text-center">
          <Reveal>
            <blockquote className="text-balance font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              &ldquo;{why.quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-sm font-medium text-white/50">
              — {SITE.legalName}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container-site max-w-4xl">
          <Reveal>
            <h2 className="text-balance text-center font-display text-h2-sm font-bold text-heading md:text-h2">
              {why.valuesHeading}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14">
            {why.values.map((value, i) => (
              <Reveal key={value} delay={i * 0.08} className="h-full">
                <li className="flex h-full items-center gap-4 rounded-2xl border border-slate/10 bg-card p-6">
                  <span className="font-display text-2xl font-bold text-blue/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-semibold text-heading">{value}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Real field photos with clients */}
      <FieldGallery className="bg-surface-2" {...WHY_GALLERY[lang]} />

      {/* Team; placeholders until real photos provided */}
      <section className="bg-surface-2 py-16 md:py-24">
        <div className="container-site max-w-4xl">
          <Reveal>
            <h2 className="text-balance text-center font-display text-h2-sm font-bold text-heading md:text-h2">
              {why.teamHeading}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14">
            {/* TODO (Albert): founder photo + 2-line bio */}
            <Reveal>
              <div className="flex h-56 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate/25 bg-card text-sm text-slate/60">
                <span className="font-medium">{why.founderPlaceholder}</span>
                <span className="text-xs">{why.todoNote}</span>
              </div>
            </Reveal>
            {/* TODO (Albert): team photo */}
            <Reveal delay={0.08}>
              <div className="flex h-56 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate/25 bg-card text-sm text-slate/60">
                <span className="font-medium">{why.teamPlaceholder}</span>
                <span className="text-xs">{why.todoNote}</span>
              </div>
            </Reveal>
          </div>

          {/* Where we work + Instagram */}
          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate/10 bg-card p-6 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="font-semibold text-heading">{why.basedIn}</p>
                <p className="mt-1 text-sm text-slate">
                  {lang === "sw" ? SITE.hoursSw : SITE.hours}
                </p>
              </div>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-heading/20 px-5 py-3 text-sm font-semibold text-heading transition-colors hover:border-heading/50"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                  className="size-4.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
                </svg>
                {why.followInstagram}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        lang={lang}
        heading={FINAL_CTA[lang].heading}
        sub={FINAL_CTA[lang].sub}
      />
    </>
  );
}
