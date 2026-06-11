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
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-navy p-8 text-center md:flex-row md:justify-between md:p-10 md:text-left">
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
                {SITE.location}
              </p>
              {/* TODO (Albert): exact street address + map pin */}
              <p className="mt-3 text-sm text-slate/60">{t.addressTodo}</p>
            </div>
          </Reveal>

          {/* Email; pending confirmation */}
          <Reveal delay={0.24} className="md:col-span-2">
            <div className="rounded-2xl border border-dashed border-slate/25 bg-surface-2 p-6 text-center text-sm text-slate/60">
              {/* TODO (Albert): confirm the email address (old site obfuscated it); then add a card + optional mailto form here */}
              {t.emailTodo}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
