import Image from "next/image";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import FeatureGrid from "@/components/FeatureGrid";
import PainList from "@/components/PainList";
import Reveal from "@/components/Reveal";
import SolutionMockup from "@/components/SolutionMockup";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { SOLUTION_PAGES } from "@/content/solution-pages";
import { getSolution, type SolutionSlug } from "@/content/solutions";
import { UI, type Lang } from "@/lib/i18n";

const FEATURES_HEADING: Record<Lang, (name: string) => string> = {
  en: (name) => `What ${name} gives you`,
  sw: (name) => `${name} inakupa nini`,
};

export default function SolutionDetailView({
  lang,
  slug,
}: {
  lang: Lang;
  slug: SolutionSlug;
}) {
  const solution = getSolution(lang, slug);
  const page = SOLUTION_PAGES[lang][slug];

  return (
    <>
      {/* Outcome hero */}
      <section className="py-16 md:py-24">
        <div className="container-site max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">{page.heroEyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 text-balance font-display text-display-sm font-bold text-heading md:text-display">
              {solution.tagline}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-slate">{page.heroSub}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppCTA lang={lang} message={solution.waPrefill} size="lg" />
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-heading/20 px-7 py-4 font-semibold text-heading transition-colors duration-200 hover:border-heading/50"
              >
                {UI[lang].seeTheFeatures}
              </a>
            </div>
          </Reveal>
          {solution.siteUrl && (
            <Reveal delay={0.28}>
              <a
                href={solution.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 font-semibold text-blue transition-colors duration-200 hover:underline"
              >
                {UI[lang].seeItLive(solution.name)}
                <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          )}

          {page.highlight && (
            <Reveal delay={0.3}>
              <div className="mt-12 rounded-2xl border border-blue/20 bg-blue/5 p-6 text-left sm:p-7">
                <p className="font-display text-lg font-bold text-heading">
                  {page.highlight.title}
                </p>
                <p className="mt-1.5 text-slate">{page.highlight.body}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <PainList heading={page.painsHeading} pains={page.pains} />

      <FeatureGrid
        heading={FEATURES_HEADING[lang](solution.name)}
        features={solution.features}
      />

      {/* Product mockup */}
      <section className="bg-surface-2 py-16 md:py-24">
        <div className="container-site max-w-xl">
          <Reveal>
            <SolutionMockup slug={slug} />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-center text-sm font-medium text-slate">
              {page.mockupCaption}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Real product screenshots (personal details pixelated) */}
      {page.screenshots && page.screenshots.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-site max-w-4xl space-y-14 md:space-y-16">
            {page.screenshots.map((shot) => (
              <div key={shot.src}>
                <Reveal>
                  <div className="overflow-hidden rounded-2xl border border-slate/10 bg-card p-2 shadow-card sm:p-3">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      unoptimized
                      className="w-full rounded-xl"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="mt-6 text-center text-sm font-medium text-slate">
                    {shot.caption}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </section>
      )}

      <FAQ title={UI[lang].quickQuestions} items={page.miniFaq} />

      <CTABand
        lang={lang}
        heading={page.cta.heading}
        sub={page.cta.sub}
        message={solution.waPrefill}
      />
    </>
  );
}
