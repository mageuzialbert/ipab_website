import ClientShowcase from "@/components/ClientShowcase";
import Reveal from "@/components/Reveal";
import Testimonial from "@/components/Testimonial";
import { TESTIMONIALS } from "@/content/testimonials";
import type { Lang } from "@/lib/i18n";

const HEADING: Record<Lang, string> = {
  en: "Owners who stopped the losses",
  sw: "Wamiliki waliokomesha hasara",
};

/**
 * Testimonials slot. Until real quotes land in src/content/testimonials.ts
 * (never invent them; CONTENT.md), it shows the client logo showcase
 * instead, so the social-proof position never sits empty.
 */
export default function Testimonials({ lang = "en" }: { lang?: Lang }) {
  const testimonials = TESTIMONIALS[lang];
  if (testimonials.length === 0) return <ClientShowcase lang={lang} />;

  return (
    <section className="bg-surface-2 py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <h2 className="text-balance text-center font-display text-h2-sm font-bold text-heading md:text-h2">
            {HEADING[lang]}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.08} className="h-full">
              <Testimonial testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
