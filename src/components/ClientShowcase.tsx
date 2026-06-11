import LogoMarquee from "@/components/LogoMarquee";
import Reveal from "@/components/Reveal";
import { SHOWCASE } from "@/content/clients";
import type { Lang } from "@/lib/i18n";

/**
 * Client showcase in the testimonials slot (until real quotes arrive):
 * heading + logos drifting left → right on a transparent background.
 */
export default function ClientShowcase({ lang = "en" }: { lang?: Lang }) {
  const t = SHOWCASE[lang];

  return (
    <section className="overflow-hidden bg-surface-2 py-16 md:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">{t.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-balance font-display text-h2-sm font-bold text-heading md:text-h2">
              {t.heading}
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Full-bleed marquee; masks fade it out at the viewport edges */}
      <Reveal delay={0.16}>
        <div className="mt-12 md:mt-16">
          <LogoMarquee />
        </div>
      </Reveal>

      <div className="container-site">
        <Reveal delay={0.24}>
          <p className="mt-12 text-center text-sm font-semibold text-heading md:mt-16">
            {t.closer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
