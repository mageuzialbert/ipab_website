import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import { STATS, STATS_HEADING } from "@/content/stats";
import type { Lang } from "@/lib/i18n";

export default function StatBar({ lang = "en" }: { lang?: Lang }) {
  const heading = STATS_HEADING[lang];

  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-lines-dark mask-fade-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[800px] -translate-x-1/2 glow-blue opacity-60"
      />
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-white/50">{heading.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-balance font-display text-h2-sm font-bold text-white md:text-h2">
              {heading.heading}
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-8">
          {STATS[lang].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <StatCounter stat={stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
