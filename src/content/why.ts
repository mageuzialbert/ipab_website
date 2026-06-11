import type { Lang } from "@/lib/i18n";

/**
 * Why iPAB page copy. English verbatim from CONTENT.md.
 * Swahili drafted in translation; TODO (Albert): review before launch.
 */

export const WHY: Record<
  Lang,
  {
    h1: string;
    story: string;
    quote: string;
    valuesHeading: string;
    values: string[];
    teamHeading: string;
    founderPlaceholder: string;
    teamPlaceholder: string;
    todoNote: string;
    basedIn: string;
    followInstagram: string;
  }
> = {
  en: {
    h1: "We don't sell software. We fix businesses.",
    story:
      "Most “system” companies sell you an app and disappear. iPAB started by sitting inside Tanzanian businesses; counting stock, watching sales walk out the door; and building exactly what stops the bleeding. Today 1,220+ businesses run on iPAB every day, from pharmacies in Dar to colleges under NACTVET.",
    quote:
      "We don't build apps, websites, or systems. We solve business challenges with technology.",
    valuesHeading: "What we hold ourselves to",
    values: [
      "Outcomes over features",
      "We train humans, not just install software",
      "24/7 means 24/7",
      "Built in Tanzania, for Tanzanian business reality",
    ],
    teamHeading: "The people who pick up at 2am",
    founderPlaceholder: "Founder photo + bio",
    teamPlaceholder: "Team photo",
    todoNote: "TODO; to be provided",
    basedIn: "Based in Dar es Salaam; serving businesses across Tanzania",
    followInstagram: "Follow on Instagram",
  },
  sw: {
    h1: "Hatuuzi software. Tunatengeneza biashara.",
    story:
      "Kampuni nyingi za “mifumo” zinakuuzia app halafu zinatoweka. iPAB ilianza kwa kukaa ndani ya biashara za Tanzania; kuhesabu stoo, kuona mauzo yakipotea mlangoni; na kujenga hasa kile kinachozuia hasara. Leo biashara 1,220+ zinatumia iPAB kila siku, kuanzia maduka ya dawa Dar mpaka vyuo vya NACTVET.",
    quote:
      "Hatutengenezi app, tovuti, wala mifumo. Tunatatua changamoto za biashara kwa teknolojia.",
    valuesHeading: "Misingi tunayojishikilia nayo",
    values: [
      "Matokeo kuliko vipengele",
      "Tunafundisha watu, si kufunga mfumo tu",
      "24/7 maana yake ni 24/7",
      "Imejengwa Tanzania, kwa uhalisia wa biashara za Tanzania",
    ],
    teamHeading: "Watu wanaopokea simu saa nane usiku",
    founderPlaceholder: "Picha ya mwanzilishi + wasifu",
    teamPlaceholder: "Picha ya timu",
    todoNote: "TODO; italetwa baadaye",
    basedIn:
      "Tupo Dar es Salaam; tunahudumia biashara Tanzania nzima",
    followInstagram: "Tufuate Instagram",
  },
};
