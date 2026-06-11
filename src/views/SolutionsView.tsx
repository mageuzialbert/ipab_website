import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import SolutionCard from "@/components/SolutionCard";
import { FINAL_CTA, SOLUTION_INTRO } from "@/content/home";
import { SOLUTIONS } from "@/content/solutions";
import { UI, type Lang } from "@/lib/i18n";

export default function SolutionsView({ lang }: { lang: Lang }) {
  const intro = SOLUTION_INTRO[lang];

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow">{UI[lang].solutions}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-balance font-display text-display-sm font-bold text-heading md:text-display">
                {intro.heading}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-slate">{intro.body}</p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16">
            {SOLUTIONS[lang].map((solution, i) => (
              <Reveal key={solution.slug} delay={i * 0.08} className="h-full">
                <SolutionCard solution={solution} lang={lang} />
              </Reveal>
            ))}
          </div>
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
