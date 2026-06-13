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
    basedIn: string;
    followInstagram: string;
  }
> = {
  en: {
    h1: "We don't sell software. We fix businesses.",
    story:
      "Most “system” companies sell you an app and disappear. iPAB started by sitting inside Tanzanian businesses; counting stock, watching sales walk out the door; and building exactly what stops the bleeding. We don't hand you a generic tool — we shape the system around how your business actually runs, then stay until it works. And with 9,000+ people using iPAB every day, every feature is sharpened by real operations, not guesswork. Today 1,220+ businesses run on iPAB, from pharmacies in Dar to colleges under NACTVET.",
    quote:
      "We don't build apps, websites, or systems. We solve business challenges with technology.",
    valuesHeading: "What we hold ourselves to",
    values: [
      "Customized to how you actually work",
      "Outcomes over features",
      "We train humans, not just install software",
      "Local support, until it works",
      "Sharpened by data from 9,000+ daily users",
      "Built in Tanzania, for Tanzanian business reality",
    ],
    basedIn: "Based in Dar es Salaam; serving businesses across Tanzania",
    followInstagram: "Follow on Instagram",
  },
  sw: {
    h1: "Hatuuzi software. Tunatengeneza biashara.",
    story:
      "Kampuni nyingi za “mifumo” zinakuuzia app halafu zinatoweka. iPAB ilianza kwa kukaa ndani ya biashara za Tanzania; kuhesabu stoo, kuona mauzo yakipotea mlangoni; na kujenga hasa kile kinachozuia hasara. Hatukupi zana ya kawaida — tunaunda mfumo kulingana na jinsi biashara yako inavyoendeshwa hasa, kisha tunabaki mpaka ufanikiwe. Na kwa watu 9,000+ wanaotumia iPAB kila siku, kila kipengele kinaboreshwa na uhalisia wa kazi, si kubahatisha. Leo biashara 1,220+ zinatumia iPAB, kuanzia maduka ya dawa Dar mpaka vyuo vya NACTVET.",
    quote:
      "Hatutengenezi app, tovuti, wala mifumo. Tunatatua changamoto za biashara kwa teknolojia.",
    valuesHeading: "Misingi tunayojishikilia nayo",
    values: [
      "Imeundwa kulingana na jinsi unavyofanya kazi hasa",
      "Matokeo kuliko vipengele",
      "Tunafundisha watu, si kufunga mfumo tu",
      "Msaada wa karibu, mpaka ufanikiwe",
      "Inaboreshwa na data ya watumiaji 9,000+ wa kila siku",
      "Imejengwa Tanzania, kwa uhalisia wa biashara za Tanzania",
    ],
    basedIn:
      "Tupo Dar es Salaam; tunahudumia biashara Tanzania nzima",
    followInstagram: "Tufuate Instagram",
  },
};
