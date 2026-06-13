import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import PricingTable from "@/components/PricingTable";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { PRICING_FAQS } from "@/content/faqs";
import { PRICING_TEASER } from "@/content/home";
import { PRICING_INTRO } from "@/content/pricing";
import { WA_PREFILLS } from "@/content/site";
import type { Lang } from "@/lib/i18n";
import { waLink } from "@/lib/whatsapp";

const FAQ_TITLE: Record<Lang, string> = {
  en: "Pricing questions",
  sw: "Maswali kuhusu bei",
};

const CTA: Record<Lang, { heading: string; sub: string }> = {
  en: {
    heading: "Not sure which plan fits?",
    sub: "One WhatsApp message. We visit for free, then quote exactly; installation and plan.",
  },
  sw: {
    heading: "Hujui mpango upi unakufaa?",
    sub: "Ujumbe mmoja wa WhatsApp. Tunakuja bure, kisha tunakupa bei kamili; usimikaji na mpango.",
  },
};

export default function PricingView({ lang }: { lang: Lang }) {
  const intro = PRICING_INTRO[lang];

  return (
    <>
      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow">{PRICING_TEASER[lang].eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-balance font-display text-display-sm font-bold text-heading md:text-display">
                {intro.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-slate">{intro.sub}</p>
            </Reveal>
          </div>

          {/* Installation fee explainer */}
          <Reveal delay={0.24}>
            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate/10 bg-surface-2 p-7 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="eyebrow">{intro.installLabel}</p>
                  <p className="mt-2 font-display text-2xl font-bold text-heading md:text-3xl">
                    {intro.installRange}
                  </p>
                </div>
                <p className="max-w-xs text-sm text-slate">
                  {intro.installNote}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tiers */}
      <section className="relative isolate bg-surface-2 py-16 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 grid-lines-light mask-fade-top"
        />
        <div className="container-site">
          <Reveal>
            <h2 className="text-balance text-center font-display text-h2-sm font-bold text-heading md:text-h2">
              {intro.tiersHeading}
            </h2>
          </Reveal>
          <div className="mt-10 md:mt-14">
            <PricingTable lang={lang} />
          </div>

          {/* Hardware note */}
          <Reveal delay={0.16}>
            <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-slate/10 bg-card p-6 text-center sm:flex-row sm:text-left">
              <p className="text-sm text-ink">
                <span className="font-semibold">{intro.hardwareLead}</span>{" "}
                {intro.hardware}
              </p>
              <a
                href={waLink(WA_PREFILLS[lang].global)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-green"
              >
                <WhatsAppIcon className="size-4" />
                {intro.askOnWhatsApp}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ title={FAQ_TITLE[lang]} items={PRICING_FAQS[lang]} />

      <CTABand lang={lang} heading={CTA[lang].heading} sub={CTA[lang].sub} />
    </>
  );
}
