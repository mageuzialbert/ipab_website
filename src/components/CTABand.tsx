import Reveal from "@/components/Reveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import type { Lang } from "@/lib/i18n";

/** Full-width dark conversion band; last section on every page. */
export default function CTABand({
  lang = "en",
  heading,
  sub,
  message,
  buttonLabel,
}: {
  lang?: Lang;
  heading: string;
  sub: string;
  message?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="dot-grid-dark border-b border-white/10 bg-navy py-16 md:py-24">
      <div className="container-site max-w-3xl text-center">
        <Reveal>
          <h2 className="text-balance font-display text-h2-sm font-bold text-white md:text-h2">
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 text-white/70">{sub}</p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-8">
            <WhatsAppCTA
              lang={lang}
              label={buttonLabel}
              message={message}
              size="lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
