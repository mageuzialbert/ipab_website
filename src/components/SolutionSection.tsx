import Reveal from "@/components/Reveal";
import SolutionCard from "@/components/SolutionCard";
import { SOLUTION_INTRO } from "@/content/home";
import { SOLUTIONS } from "@/content/solutions";
import type { Lang } from "@/lib/i18n";

export default function SolutionSection({ lang = "en" }: { lang?: Lang }) {
  const intro = SOLUTION_INTRO[lang];

  return (
    <section className="bg-surface-2 py-16 md:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-balance font-display text-h2-sm font-bold text-heading md:text-h2">
              {intro.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-slate">{intro.body}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {SOLUTIONS[lang].map((solution, i) => (
            <Reveal key={solution.slug} delay={i * 0.08} className="h-full">
              <SolutionCard solution={solution} lang={lang} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
