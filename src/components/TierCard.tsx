import WhatsAppCTA from "@/components/WhatsAppCTA";
import { formatTzsPerMonth, type PricingTier } from "@/content/pricing";
import { UI, type Lang } from "@/lib/i18n";

export default function TierCard({
  tier,
  lang = "en",
}: {
  tier: PricingTier;
  lang?: Lang;
}) {
  const [price, period] = formatTzsPerMonth(tier.priceTzs, lang).split("/");

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border bg-card p-7 ${
        tier.popular ? "border-blue shadow-lift" : "border-slate/10"
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-3 left-7 rounded-full bg-blue px-3 py-1 text-xs font-semibold text-white dark:text-navy">
          {UI[lang].mostPopular}
        </span>
      )}

      <h3 className="font-display text-lg font-bold text-heading">
        {tier.name}
      </h3>
      <p className="mt-1 text-sm text-slate">{tier.audience}</p>

      <p className="mt-5 font-display text-3xl font-bold tracking-tight text-heading">
        {price}
        {period && (
          <span className="text-base font-semibold text-slate">/{period}</span>
        )}
      </p>

      <ul className="mt-6 space-y-2.5">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="size-2.5">
                <path
                  d="M3.5 8.5l3 3 6-6.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <WhatsAppCTA
          lang={lang}
          message={tier.waPrefill}
          label={UI[lang].chatAbout(tier.name)}
          className="w-full px-4"
        />
      </div>
    </div>
  );
}
