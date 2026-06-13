import Image from "next/image";
import Link from "next/link";
import type { Testimonial as TestimonialType } from "@/content/testimonials";
import { localeHref, type Lang } from "@/lib/i18n";

export default function Testimonial({
  testimonial,
  lang = "en",
}: {
  testimonial: TestimonialType;
  lang?: Lang;
}) {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate/10 bg-card">
      <div className="relative aspect-[16/10]">
        <Image
          src={testimonial.photo.src}
          alt={testimonial.alt}
          fill
          unoptimized
          sizes="(min-width: 768px) 24rem, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <blockquote className="text-ink">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-auto flex items-center justify-between gap-4 pt-6">
          <p className="font-semibold text-heading">{testimonial.business}</p>
          <Link
            href={localeHref(lang, `/solutions/${testimonial.solutionSlug}`)}
            className="shrink-0 rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue transition-colors hover:bg-blue/15"
          >
            {testimonial.solutionName}
          </Link>
        </figcaption>
      </div>
    </figure>
  );
}
