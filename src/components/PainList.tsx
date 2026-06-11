import Reveal from "@/components/Reveal";

/** "Built for {industry}"; the losses this solution exists to stop. */
export default function PainList({
  heading,
  pains,
}: {
  heading: string;
  pains: string[];
}) {
  return (
    <section className="bg-surface-2 py-16 md:py-24">
      <div className="container-site max-w-4xl">
        <Reveal>
          <h2 className="text-balance text-center font-display text-h2-sm font-bold text-heading md:text-h2">
            {heading}
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2">
          {pains.map((pain, i) => (
            <Reveal key={pain} delay={i * 0.08} className="h-full">
              <li className="flex h-full items-start gap-3.5 rounded-2xl border border-slate/10 bg-card p-5">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-heading/5 text-slate">
                  <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="size-3"
                  >
                    <path
                      d="M4.5 4.5l7 7M11.5 4.5l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <p className="font-medium text-ink">{pain}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
