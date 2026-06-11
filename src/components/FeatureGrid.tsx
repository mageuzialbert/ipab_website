import Reveal from "@/components/Reveal";

export default function FeatureGrid({
  heading = "What you get",
  features,
}: {
  heading?: string;
  features: string[];
}) {
  return (
    <section id="features" className="scroll-mt-20 py-16 md:py-24">
      <div className="container-site max-w-5xl">
        <Reveal>
          <h2 className="text-balance text-center font-display text-h2-sm font-bold text-heading md:text-h2">
            {heading}
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature} delay={i * 0.08} className="h-full">
              <li className="flex h-full items-start gap-3.5 rounded-2xl border border-slate/10 bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                  <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="size-3"
                  >
                    <path
                      d="M3.5 8.5l3 3 6-6.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="font-medium text-ink">{feature}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
