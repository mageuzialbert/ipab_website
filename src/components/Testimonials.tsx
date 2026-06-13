import Image from "next/image";
import Link from "next/link";
import ClientShowcase from "@/components/ClientShowcase";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import Testimonial from "@/components/Testimonial";
import { SHOWCASE } from "@/content/clients";
import { TESTIMONIALS } from "@/content/testimonials";
import { localeHref, type Lang } from "@/lib/i18n";

const HEADING: Record<Lang, string> = {
  en: "Owners who stopped the losses",
  sw: "Wamiliki waliokomesha hasara",
};

/**
 * Real client testimonials. The first quote renders as a featured card
 * (photo + quote), the rest as a photo grid; a closing line reuses the
 * showcase social-proof. Falls back to the logo showcase only if the
 * testimonial list is ever emptied (never invent quotes; CONTENT.md).
 */
export default function Testimonials({ lang = "en" }: { lang?: Lang }) {
  const testimonials = TESTIMONIALS[lang];
  if (testimonials.length === 0) return <ClientShowcase lang={lang} />;

  const [featured, ...rest] = testimonials;

  return (
    <section className="relative isolate bg-surface-2 py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-lines-light mask-fade-top"
      />
      <div className="container-site">
        <Reveal>
          <h2 className="text-balance text-center font-display text-h2-sm font-bold text-heading md:text-h2">
            {HEADING[lang]}
          </h2>
        </Reveal>

        {/* Featured testimonial — photo + quote, flagship gradient border */}
        <Reveal delay={0.08}>
          <SpotlightCard className="mx-auto mt-10 max-w-5xl md:mt-14">
            <figure className="grid h-full overflow-hidden rounded-2xl gradient-border-card lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[22rem]">
                <Image
                  src={featured.photo.src}
                  alt={featured.alt}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex flex-col justify-center gap-5 p-7 md:p-10">
                <svg
                  viewBox="0 0 32 24"
                  aria-hidden="true"
                  className="size-7 text-blue/30"
                >
                  <path
                    fill="currentColor"
                    d="M0 24V13.3Q0 7.5 2.9 4 5.9.5 11.6 0l.9 3.7Q9 4.4 7.6 6.6q-1.4 2.1-1.5 5.1H12V24H0Zm20 0V13.3Q20 7.5 22.9 4 25.9.5 31.6 0l.9 3.7Q29 4.4 27.6 6.6q-1.4 2.1-1.5 5.1H32V24H20Z"
                  />
                </svg>
                <blockquote className="font-display text-xl font-medium leading-relaxed text-heading md:text-2xl">
                  {featured.quote}
                </blockquote>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold text-heading">
                    {featured.business}
                  </p>
                  <Link
                    href={localeHref(
                      lang,
                      `/solutions/${featured.solutionSlug}`,
                    )}
                    className="shrink-0 rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue transition-colors hover:bg-blue/15"
                  >
                    {featured.solutionName}
                  </Link>
                </div>
              </figcaption>
            </figure>
          </SpotlightCard>
        </Reveal>

        {/* The rest */}
        <div className="mx-auto mt-5 grid max-w-5xl gap-5 md:grid-cols-2">
          {rest.map((testimonial, i) => (
            <Reveal key={testimonial.business} delay={i * 0.08} className="h-full">
              <SpotlightCard>
                <Testimonial testimonial={testimonial} lang={lang} />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <p className="mt-12 text-center text-sm font-semibold text-heading md:mt-16">
            {SHOWCASE[lang].closer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
