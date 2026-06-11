import Reveal from "@/components/Reveal";
import { HOW_IT_WORKS } from "@/content/home";
import type { Lang } from "@/lib/i18n";

/** Kills the "complicated software" fear; three plain steps. */
export default function HowItWorks({ lang = "en" }: { lang?: Lang }) {
  const how = HOW_IT_WORKS[lang];

  return (
    <section id="how-it-works" className="scroll-mt-20 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <h2 className="text-balance text-center font-display text-h2-sm font-bold text-heading md:text-h2">
            {how.heading}
          </h2>
        </Reveal>

        <ol className="relative mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
          {/* Connector line, desktop only */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-5 hidden border-t border-dashed border-slate/20 md:block"
          />
          {how.steps.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={i * 0.08}>
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-blue font-display text-lg font-bold text-white ring-8 ring-surface dark:text-navy">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-h3 font-bold text-heading">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-sm text-slate">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
