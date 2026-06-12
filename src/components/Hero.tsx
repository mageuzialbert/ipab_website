import DashboardMockup from "@/components/DashboardMockup";
import Reveal from "@/components/Reveal";
import SmokeTrail from "@/components/SmokeTrail";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { HERO } from "@/content/home";
import type { Lang } from "@/lib/i18n";

export default function Hero({ lang = "en" }: { lang?: Lang }) {
  const hero = HERO[lang];
  const [h1Before, h1After] = hero.h1.split(hero.h1Highlight);

  return (
    <section className="relative overflow-hidden">
      {/* Soft accent behind the mockup; subtle, never a gradient wash */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-10 -z-10 size-[480px] rounded-full bg-blue/5 blur-3xl"
      />

      <div className="container-site grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Copy; first in DOM so headline + CTA are above the fold on mobile */}
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow">{hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 text-balance font-display text-display-sm font-bold text-heading md:text-display">
              {h1Before}
              <span className="text-blue">{hero.h1Highlight}</span>
              {h1After}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-slate">{hero.subhead}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCTA lang={lang} label={hero.ctaPrimary} size="lg" />
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-heading/20 px-7 py-4 font-semibold text-heading transition-colors duration-200 hover:border-heading/50"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:pl-4">
          <DashboardMockup />
        </Reveal>
      </div>

      {/* Cursor smoke-trail; paints over the hero, never blocks clicks */}
      <SmokeTrail />
    </section>
  );
}
