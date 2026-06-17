import Reveal from "@/components/Reveal";
import { PRIVACY } from "@/content/privacy";
import type { Lang } from "@/lib/i18n";

export default function PrivacyView({ lang }: { lang: Lang }) {
  const privacy = PRIVACY[lang];

  return (
    <section className="py-16 md:py-24">
      <div className="container-site max-w-3xl">
        <Reveal>
          <p className="eyebrow">{privacy.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 text-balance font-display text-display-sm font-bold text-heading md:text-display">
            {privacy.title}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 text-sm font-medium text-slate">
            {privacy.updated}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-8 space-y-4 text-slate">
            {privacy.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 space-y-10">
          {privacy.sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i, 4) * 0.04}>
              <div className="space-y-4">
                <h2 className="font-display text-h3 font-bold text-heading">
                  {section.heading}
                </h2>
                {section.body?.map((p) => (
                  <p key={p} className="text-slate">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-slate"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue/50"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
