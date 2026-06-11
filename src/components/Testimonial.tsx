import type { Testimonial as TestimonialType } from "@/content/testimonials";

export default function Testimonial({
  testimonial,
}: {
  testimonial: TestimonialType;
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate/10 bg-card p-7">
      <blockquote className="text-ink">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-end justify-between gap-4 pt-2">
        <div>
          <p className="font-semibold text-heading">{testimonial.name}</p>
          <p className="text-sm text-slate">{testimonial.business}</p>
        </div>
        {testimonial.result && (
          <span className="rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">
            {testimonial.result}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
