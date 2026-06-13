import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import TierCard from "@/components/TierCard";
import { PRICING_TIERS } from "@/content/pricing";
import type { Lang } from "@/lib/i18n";

export default function PricingTable({ lang = "en" }: { lang?: Lang }) {
  return (
    <div className="grid gap-5 pt-3 md:grid-cols-2 lg:grid-cols-3">
      {/* TODO (Albert): confirm exact inclusions per tier before launch; see CONTENT.md */}
      {PRICING_TIERS[lang].map((tier, i) => (
        <Reveal key={tier.name} delay={i * 0.08} className="h-full">
          <SpotlightCard>
            <TierCard tier={tier} lang={lang} />
          </SpotlightCard>
        </Reveal>
      ))}
    </div>
  );
}
