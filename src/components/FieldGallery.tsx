import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { FieldPhoto } from "@/content/photos";

/**
 * Real field-photo band; lazy-loaded, always below the fold.
 * Photo cards scroll right-to-left in a continuous marquee (paused on
 * hover, stilled under prefers-reduced-motion). The row is rendered
 * twice and each copy slides by its own width, so the loop is seamless.
 */
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
        <Reveal delay={0.16}>
          <div className="group mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] md:mt-14">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="animate-marquee flex min-w-max flex-none items-stretch gap-5 pr-5 [animation-duration:45s] group-hover:[animation-play-state:paused]"
              >
                {photos.map((photo) => (
                  <figure
                    key={photo.src}
                    className="w-72 overflow-hidden rounded-2xl border border-slate/10 bg-card p-2 shadow-card sm:w-96"
                  >
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
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
