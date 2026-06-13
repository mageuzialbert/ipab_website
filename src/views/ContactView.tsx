import Reveal from "@/components/Reveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { CONTACT } from "@/content/contact";
import { SITE } from "@/content/site";
import type { Lang } from "@/lib/i18n";

export default function ContactView({ lang }: { lang: Lang }) {
  const t = CONTACT[lang];

  return (
    <section className="py-16 md:py-24">
      <div className="container-site max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">{t.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 text-balance font-display text-display-sm font-bold text-heading md:text-display">
              {t.h1}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-slate">{t.sub}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
          {/* WhatsApp; primary */}
          <Reveal className="md:col-span-2">
            <div className="relative isolate flex flex-col items-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-navy p-8 text-center md:flex-row md:justify-between md:p-10 md:text-left">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 grid-lines-dark mask-fade-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 -z-10 size-[320px] glow-blue opacity-60"
              />
              <div>
                <h2 className="font-display text-h3 font-bold text-white">
                  {t.whatsappHeading}
                </h2>
                <p className="mt-1.5 text-white/70">{t.whatsappBody}</p>
              </div>
              <WhatsAppCTA lang={lang} size="lg" className="shrink-0" />
            </div>
          </Reveal>

          {/* Call */}
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-slate/10 bg-card p-7">
              <p className="eyebrow">{t.callUs}</p>
              <ul className="mt-3 space-y-2">
                {SITE.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replaceAll(" ", "")}`}
                      className="font-display text-xl font-bold text-heading transition-colors hover:text-blue"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-slate">
                {lang === "sw" ? SITE.hoursSw : SITE.hours}
              </p>
            </div>
          </Reveal>

          {/* Visit */}
          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl border border-slate/10 bg-card p-7">
              <p className="eyebrow">{t.visitUs}</p>
              <p className="mt-3 font-display text-xl font-bold text-heading">
                {SITE.address}
              </p>
              <p className="mt-1 text-sm text-slate">{SITE.location}</p>
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:underline"
              >
                {t.openMap}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>

          {/* Email */}
          <Reveal delay={0.24} className="md:col-span-2">
            <div className="rounded-2xl border border-slate/10 bg-card p-7 text-center">
              <p className="eyebrow">{t.emailUs}</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 inline-block font-display text-xl font-bold text-heading transition-colors hover:text-blue"
              >
                {SITE.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
