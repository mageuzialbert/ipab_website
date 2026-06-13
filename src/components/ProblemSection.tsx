import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import { PROBLEMS } from "@/content/home";
import type { Lang } from "@/lib/i18n";

const ICONS = [
  // Open box; stock disappears
  <path
    key="box"
    d="M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8"
  />,
  // Obscured chart; can't see the numbers
  <path
    key="chart"
    d="M4 19V5M4 19h16M8 15v-3M12 15V8M16 15v-5M18.5 3.5l-14 17"
  />,
  // Customer walks away; no repeat sales
  <path
    key="leave"
    d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 21v-1a6 6 0 0 1 9-5.2M16 11l5 5M21 11l-5 5"
  />,
];

export default function ProblemSection({ lang = "en" }: { lang?: Lang }) {
  const problems = PROBLEMS[lang];

  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <h2 className="text-balance text-center font-display text-h2-sm font-bold text-heading md:text-h2">
            {problems.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {problems.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <SpotlightCard spotColor="rgb(27 109 243 / 0.06)">
                <div className="h-full rounded-2xl border border-slate/10 bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
                <span className="flex size-11 items-center justify-center rounded-xl bg-heading/5 text-heading">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="size-5.5"
                  >
                    {ICONS[i]}
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-h3 font-bold text-heading">
                  {card.title}
                </h3>
                  <p className="mt-2 text-slate">{card.body}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <p className="mt-10 text-center text-lg font-semibold text-heading md:mt-14">
            {problems.closer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
