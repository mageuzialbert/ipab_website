import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { FieldPhoto } from "@/content/photos";

/** Real field-photo band; lazy-loaded, always below the fold. */
export default function FieldGallery({
  eyebrow,
  heading,
  photos,
  className = "",
}: {
  eyebrow?: string;
  heading: string;
  photos: FieldPhoto[];
  className?: string;
}) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container-site">
        {eyebrow && (
          <Reveal>
            <p className="eyebrow text-center">{eyebrow}</p>
          </Reveal>
        )}
        <Reveal delay={0.08}>
          <h2 className="mt-4 text-balance text-center font-display text-h2-sm font-bold text-heading md:text-h2">
            {heading}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 0.08} className="h-full">
              <figure className="h-full overflow-hidden rounded-2xl border border-slate/10 bg-card p-2 shadow-card">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  unoptimized
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
                <figcaption className="px-2 py-3 text-center text-sm font-medium text-slate">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
