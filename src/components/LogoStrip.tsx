import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CLIENTS } from "@/content/clients";
import { TRUST_BAR } from "@/content/home";
import type { Lang } from "@/lib/i18n";

/**
 * Trust bar; immediately under the hero. Transparent client logos,
 * grayscale 60% → full color on hover (white silhouettes in dark mode).
 */
export default function LogoStrip({ lang = "en" }: { lang?: Lang }) {
  return (
    <section className="border-y border-slate/10 bg-surface-2">
      <div className="container-site py-10 md:py-12">
        <Reveal>
          <p className="text-center text-sm font-medium text-slate">
            {TRUST_BAR[lang].line}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-12">
            {CLIENTS.map((client) => (
              <Image
                key={client.name}
                src={client.src}
                alt={`${client.name} logo`}
                title={client.name}
                width={client.width}
                height={client.height}
                unoptimized
                className="h-7 w-auto max-w-32 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-8 dark:brightness-0 dark:invert dark:hover:opacity-90"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
