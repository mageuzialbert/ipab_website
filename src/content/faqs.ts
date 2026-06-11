import type { Lang } from "@/lib/i18n";

export type Faq = { question: string; answer: string };

/**
 * English verbatim from CONTENT.md.
 * Swahili drafted in translation; TODO (Albert): review before launch.
 */

export const HOME_FAQS: Record<Lang, Faq[]> = {
  en: [
    {
      question: "Do you build websites and apps?",
      answer:
        "No. We solve business problems; losses, stock, operations; using our own proven systems. (Cloud services like hosting and bulk SMS exist for our clients.)",
    },
    {
      question: "Is it complicated for my staff?",
      answer:
        "No. We train your team ourselves and stay available 24/7. Most staff are confident within days.",
    },
    {
      question: "What does it cost?",
      answer:
        "Installation from TZS 50,000 and plans from TZS 15,000/month. See Pricing; it's public, no surprises.",
    },
    {
      question: "Does it work for my type of business?",
      answer:
        "We run in pharmacies, hotels, colleges, shops, and wholesalers. If you sell anything or manage anyone, yes.",
    },
    {
      question: "What if something breaks?",
      answer:
        "24/7 support on WhatsApp and phone. Real humans in Dar es Salaam, not a ticket queue.",
    },
  ],
  sw: [
    {
      question: "Mnatengeneza tovuti na app?",
      answer:
        "Hapana. Tunatatua matatizo ya biashara; upotevu, stoo, uendeshaji; kwa kutumia mifumo yetu iliyothibitishwa. (Huduma za mtandao kama kuhifadhi tovuti na SMS kwa wingi zipo kwa ajili ya wateja wetu.)",
    },
    {
      question: "Je, ni ngumu kwa wafanyakazi wangu?",
      answer:
        "Hapana. Tunawafundisha wafanyakazi wako sisi wenyewe na tupo 24/7. Wafanyakazi wengi wanazoea ndani ya siku chache.",
    },
    {
      question: "Inagharimu kiasi gani?",
      answer:
        "Usimikaji kuanzia TZS 50,000 na mipango kuanzia TZS 15,000/mwezi. Ona Bei; ziko wazi, hakuna cha kushtukiza.",
    },
    {
      question: "Je, inafaa kwa aina ya biashara yangu?",
      answer:
        "Tunafanya kazi kwenye maduka ya dawa, hoteli, vyuo, maduka, na wauzaji wa jumla. Kama unauza chochote au unasimamia mtu yeyote, ndiyo.",
    },
    {
      question: "Ikiharibika je?",
      answer:
        "Msaada 24/7 kwa WhatsApp na simu. Watu halisi Dar es Salaam, si foleni ya tiketi.",
    },
  ],
};

export const PRICING_FAQS: Record<Lang, Faq[]> = {
  en: [
    {
      question: "Why an installation fee?",
      answer:
        "We physically set up, customize, and train; it's real work, done once.",
    },
    {
      question: "How does billing work?",
      answer:
        // TODO: confirm payment methods with Albert
        "Every 3 months, via M-Pesa, Tigo Pesa, or bank.",
    },
    {
      question: "Can I upgrade?",
      answer: "Anytime, pay the difference.",
    },
    {
      question: "Do you supply hardware?",
      answer:
        "Yes; printers, scanners, and POS hardware. Ask on WhatsApp and we'll quote it with your installation.",
    },
    // TODO: add "Can I cancel?" once Albert confirms the contract lock-in policy; state it plainly whatever it is
  ],
  sw: [
    {
      question: "Kwa nini kuna ada ya usimikaji?",
      answer:
        "Tunakuja kufunga, kurekebisha, na kufundisha; ni kazi halisi, inayofanyika mara moja.",
    },
    {
      question: "Malipo yanafanyikaje?",
      answer: "Kila miezi 3, kwa M-Pesa, Tigo Pesa, au benki.",
    },
    {
      question: "Naweza kupanda daraja?",
      answer: "Wakati wowote, unalipa tofauti tu.",
    },
    {
      question: "Mnauza vifaa?",
      answer:
        "Ndiyo; printa, scanner, na vifaa vya POS. Ulizia WhatsApp tutakupa bei pamoja na usimikaji.",
    },
  ],
};
