"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CLIENTS } from "@/content/clients";

/**
 * Client logos drifting left → right in a seamless framer-motion loop.
 * Two identical sets translate from -50% to 0%, so the wrap is invisible.
 * Edges fade out via a CSS mask. Slow and quiet by design; renders a
 * static wrapped row under prefers-reduced-motion.
 *
 * Logos are transparent PNGs: grayscale at 60% in light mode, white
 * silhouettes in dark mode (brightness-0 + invert).
 */
const LOGO_CLASSES =
  "h-9 w-auto max-w-44 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-11 dark:brightness-0 dark:invert dark:hover:opacity-90 md:max-w-none";

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
    >
      {CLIENTS.map((client) => (
        <Image
          key={client.name}
          src={client.src}
          alt={hidden ? "" : `${client.name} logo`}
          title={client.name}
          width={client.width}
          height={client.height}
          unoptimized
          className={LOGO_CLASSES}
        />
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
        {CLIENTS.map((client) => (
          <Image
            key={client.name}
            src={client.src}
            alt={`${client.name} logo`}
            title={client.name}
            width={client.width}
            height={client.height}
            unoptimized
            className={LOGO_CLASSES}
          />
        ))}
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className="overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <m.div
          className="flex w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          <LogoSet />
          <LogoSet hidden />
        </m.div>
      </div>
    </LazyMotion>
  );
}
