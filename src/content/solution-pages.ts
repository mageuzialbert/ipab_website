import type { Faq } from "@/content/faqs";
import type { SolutionSlug } from "@/content/solutions";
import type { Lang } from "@/lib/i18n";

/**
 * Per-solution page copy. Taglines + features come from solutions.ts.
 * English stays within CONTENT.md facts; Swahili drafted in translation —
 * TODO (Albert): review before launch. No invented numbers, clients, results.
 */

const STAFF_FAQ: Record<Lang, Faq> = {
  en: {
    question: "Will my staff manage it?",
    answer:
      "Yes. We install it, train your team ourselves, and stay available 24/7. Most staff are confident within days.",
  },
  sw: {
    question: "Je, wafanyakazi wangu wataiweza?",
    answer:
      "Ndiyo. Tunaifunga, tunawafundisha wafanyakazi wako sisi wenyewe, na tupo 24/7. Wengi wanazoea ndani ya siku chache.",
  },
};

export type SolutionPage = {
  slug: SolutionSlug;
  heroEyebrow: string;
  heroSub: string;
  /** Optional unmissable callout under the hero (NACTVET, AI audit). */
  highlight?: { title: string; body: string };
  painsHeading: string;
  pains: string[];
  mockupCaption: string;
  /** Real product screenshots; personal details pixelated before publishing. */
  screenshots?: Array<{
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  }>;
  miniFaq: Faq[];
  cta: { heading: string; sub: string };
};

/** Real product screenshots provided by Albert (June 2026); guest/student
 *  names, registration numbers, and college branding removed before they
 *  entered the repo. */
const SHOT_FILES = {
  hotelRooms: {
    src: "/screenshots/smarthotels-rooms.webp",
    width: 1600,
    height: 770,
  },
  collegeResults: {
    src: "/screenshots/smartcolleges-results.webp",
    width: 1596,
    height: 1167,
  },
  collegeAttendance: {
    src: "/screenshots/smartcolleges-attendance.webp",
    width: 930,
    height: 556,
  },
};

export const SOLUTION_PAGES: Record<Lang, Record<SolutionSlug, SolutionPage>> =
  {
    en: {
      smartpoint: {
        slug: "smartpoint",
        heroEyebrow: "For shops, wholesalers & any business with stock",
        heroSub:
          "SmartPoint tracks every sale, every item of stock, and every expense; live; and sends the daily report to your phone.",
        painsHeading: "Built for how Tanzanian shops actually run",
        pains: [
          "Stock leaves the shelf but never shows in the books.",
          "End-of-day totals depend on someone counting; and being honest.",
          "Expenses pile up with no record of where the money went.",
          "Regular customers get no follow-up, so they drift to the shop next door.",
        ],
        mockupCaption: "Your shop, live on your phone; sales, stock, alerts.",
        miniFaq: [
          STAFF_FAQ.en,
          {
            question: "What does SmartPoint cost?",
            answer:
              "Plans start at TZS 15,000/month, plus a one-time installation from TZS 50,000. Pricing is public; no surprises.",
          },
          {
            question: "Do you supply the hardware?",
            answer:
              "Yes; printers, scanners, and POS hardware. Ask on WhatsApp and we'll quote with the installation.",
          },
        ],
        cta: {
          heading: "Take control of your shop this week.",
          sub: "One WhatsApp message. We visit, study how your business runs, and tell you exactly what we'd fix.",
        },
      },
      smartpharmacy: {
        slug: "smartpharmacy",
        heroEyebrow: "For pharmacies",
        heroSub:
          "An AI-powered audit flags suspicious stock movement before it becomes a loss. Automatic stock reports, expiry tracking, and an online catalogue your customers can browse.",
        highlight: {
          title: "AI audit, watching every movement",
          body: "Quantities that don't match sales, unusual adjustments, counts that come up short; flagged automatically, the same day.",
        },
        painsHeading: "Built for the way pharmacy losses actually happen",
        pains: [
          "Stock moves and nobody can explain why the count is short.",
          "Expired medicine is discovered on the shelf; after it stopped selling.",
          "No clean record of sales and prescriptions when you need it.",
          "Customers call to ask what's in stock because they can't see it anywhere.",
        ],
        mockupCaption:
          "The owner's view: audit flags, expiries, and today's sales.",
        miniFaq: [
          {
            question: "What does the AI audit actually do?",
            answer:
              "It watches stock movement and flags anything suspicious; quantities that don't match sales, unusual adjustments; so you can act the same day instead of discovering it at the next count.",
          },
          STAFF_FAQ.en,
          {
            question: "What does it cost for a pharmacy?",
            answer:
              "Pharmacies fit the Pro plan at TZS 50,000/month, which includes the AI audit module. Installation from TZS 50,000; exact quote after a free visit.",
          },
        ],
        cta: {
          heading: "Find out where your stock is going.",
          sub: "One WhatsApp message. We'll show you SmartPharmacy on a real screen, not a brochure.",
        },
      },
      smarthotels: {
        slug: "smarthotels",
        heroEyebrow: "For hotels, lodges & guesthouses",
        heroSub:
          "Bookings, front desk, restaurant and bar billing, housekeeping; one system, with the owner's dashboard live on your phone.",
        painsHeading: "Built for the front desk at full occupancy",
        pains: [
          "Double bookings that surface when the guest is standing at the desk.",
          "Restaurant and bar bills that never reach the room invoice.",
          "Housekeeping runs on shouting and memory.",
          "Guests check out and vanish; no record to bring them back.",
        ],
        mockupCaption:
          "Tonight's house at a glance; rooms, bills, housekeeping.",
        screenshots: [
          {
            ...SHOT_FILES.hotelRooms,
            alt: "Real SmartHotels room status board",
            caption:
              "The real SmartHotels room board: available, occupied, and housekeeping at a glance. Guest names blurred.",
          },
        ],
        miniFaq: [
          {
            question: "Does it cover the restaurant and bar?",
            answer:
              "Yes. Restaurant and bar billing is built in, so every charge lands on the right guest bill.",
          },
          {
            question: "Can I see the hotel when I'm away?",
            answer:
              "Yes. The owner's dashboard shows bookings, room status, and billing live on your phone, wherever you are.",
          },
          STAFF_FAQ.en,
        ],
        cta: {
          heading: "Run a full house without the chaos.",
          sub: "One WhatsApp message. We'll walk you through SmartHotels and quote for your property.",
        },
      },
      smartcolleges: {
        slug: "smartcolleges",
        heroEyebrow: "For colleges under NACTVET",
        heroSub:
          "SmartColleges collects NACTVET requirements automatically; including % attendance; and produces reports ready for submission. Student records, results, fees, and SMS to parents, in one system.",
        highlight: {
          title: "Built around NACTVET requirements",
          body: "% attendance collected automatically, term by term. Reports come out ready for submission; not compiled by hand the week before.",
        },
        painsHeading: "Built for registrars who are tired of paper",
        pains: [
          "NACTVET reports compiled by hand from paper registers, every term.",
          "Attendance percentages scattered across class registers.",
          "Fee balances nobody can state with confidence.",
          "Parents and students hear nothing until there's a problem.",
        ],
        mockupCaption:
          "Attendance, compliance, and fees; ready when NACTVET asks.",
        screenshots: [
          {
            ...SHOT_FILES.collegeResults,
            alt: "Real module results report produced by SmartColleges",
            caption:
              "Real module results, computed and graded automatically the moment CATs close.",
          },
          {
            ...SHOT_FILES.collegeAttendance,
            alt: "Real attendance report produced by SmartColleges",
            caption:
              "A real attendance report; percentages computed automatically, ready for NACTVET. Student details blurred.",
          },
        ],
        miniFaq: [
          {
            question: "Does it produce what NACTVET asks for?",
            answer:
              "Yes. It collects the requirements automatically; including % attendance; and the reports come out ready for submission.",
          },
          {
            question: "Can parents and students get updates?",
            answer:
              "Yes. SMS notifications to parents and students are built in; results, fees, and announcements.",
          },
          {
            question: "What does it cost for a college?",
            answer:
              "Colleges fit the Max plan at TZS 100,000/month; branches, advanced reports, and on-site visits included. Installation depends on size; exact quote after a free visit.",
          },
        ],
        cta: {
          heading: "Be ready before NACTVET asks.",
          sub: "One WhatsApp message. We'll show you the reports your college would submit.",
        },
      },
    },
    sw: {
      smartpoint: {
        slug: "smartpoint",
        heroEyebrow:
          "Kwa maduka, wauzaji wa jumla na biashara yoyote yenye stoo",
        heroSub:
          "SmartPoint inafuatilia kila mauzo, kila bidhaa ya stoo, na kila matumizi; papo hapo; na inakutumia ripoti ya siku kwenye simu yako.",
        painsHeading: "Imejengwa kwa jinsi maduka ya Tanzania yanavyoendeshwa",
        pains: [
          "Bidhaa zinaondoka rafu lakini hazionekani kwenye vitabu.",
          "Jumla ya mauzo ya siku inategemea mtu kuhesabu; na kuwa mwaminifu.",
          "Matumizi yanaongezeka bila kumbukumbu ya pesa zilikokwenda.",
          "Wateja wa kawaida hawafuatiliwi, wanahamia duka la jirani.",
        ],
        mockupCaption:
          "Duka lako, papo hapo kwenye simu yako; mauzo, stoo, tahadhari.",
        miniFaq: [
          STAFF_FAQ.sw,
          {
            question: "SmartPoint inagharimu kiasi gani?",
            answer:
              "Mipango inaanzia TZS 15,000/mwezi, pamoja na usimikaji wa mara moja kuanzia TZS 50,000. Bei ziko wazi; hakuna cha kushtukiza.",
          },
          {
            question: "Mnauza vifaa?",
            answer:
              "Ndiyo; printa, scanner, na vifaa vya POS. Ulizia WhatsApp tutakupa bei pamoja na usimikaji.",
          },
        ],
        cta: {
          heading: "Chukua udhibiti wa duka lako wiki hii.",
          sub: "Ujumbe mmoja wa WhatsApp. Tunakuja, tunaisoma biashara yako, na tunakuambia hasa tungerekebisha nini.",
        },
      },
      smartpharmacy: {
        slug: "smartpharmacy",
        heroEyebrow: "Kwa maduka ya dawa",
        heroSub:
          "Ukaguzi wa AI unagundua mwenendo wa stoo unaotia shaka kabla haujawa hasara. Ripoti za stoo za moja kwa moja, ufuatiliaji wa tarehe za mwisho, na katalogi ya mtandaoni ambayo wateja wako wanaweza kuangalia.",
        highlight: {
          title: "Ukaguzi wa AI, unaangalia kila mwenendo",
          body: "Idadi zisizolingana na mauzo, marekebisho yasiyo ya kawaida, hesabu zinazopungua; vinagunduliwa moja kwa moja, siku hiyo hiyo.",
        },
        painsHeading: "Imejengwa kwa jinsi hasara za duka la dawa zinavyotokea",
        pains: [
          "Stoo inahama na hakuna anayeweza kueleza kwa nini hesabu imepungua.",
          "Dawa zilizokwisha muda zinagunduliwa rafu; baada ya kuacha kuuzwa.",
          "Hakuna kumbukumbu safi ya mauzo na maagizo ya daktari unapoihitaji.",
          "Wateja wanapiga simu kuuliza kuna dawa gani kwa sababu hawawezi kuona popote.",
        ],
        mockupCaption:
          "Mtazamo wa mmiliki: tahadhari za ukaguzi, tarehe za mwisho, na mauzo ya leo.",
        miniFaq: [
          {
            question: "Ukaguzi wa AI unafanya nini hasa?",
            answer:
              "Unaangalia mwenendo wa stoo na kugundua chochote kinachotia shaka; idadi zisizolingana na mauzo, marekebisho yasiyo ya kawaida; ili uchukue hatua siku hiyo hiyo badala ya kugundua kwenye hesabu ijayo.",
          },
          STAFF_FAQ.sw,
          {
            question: "Inagharimu kiasi gani kwa duka la dawa?",
            answer:
              "Maduka ya dawa yanafaa mpango wa Pro wa TZS 50,000/mwezi, unaojumuisha moduli ya ukaguzi wa AI. Usimikaji kuanzia TZS 50,000; bei kamili baada ya ziara ya bure.",
          },
        ],
        cta: {
          heading: "Jua stoo yako inakwenda wapi.",
          sub: "Ujumbe mmoja wa WhatsApp. Tutakuonyesha SmartPharmacy kwenye skrini halisi, si brosha.",
        },
      },
      smarthotels: {
        slug: "smarthotels",
        heroEyebrow: "Kwa hoteli, lodge na nyumba za wageni",
        heroSub:
          "Uhifadhi wa vyumba, mapokezi, bili za mgahawa na baa, usafi wa vyumba; mfumo mmoja, na dashibodi ya mmiliki papo hapo kwenye simu yako.",
        painsHeading: "Imejengwa kwa mapokezi yaliyojaa wageni",
        pains: [
          "Vyumba kuhifadhiwa mara mbili; unagundua mgeni akiwa amesimama mapokezi.",
          "Bili za mgahawa na baa hazifiki kwenye ankara ya chumba.",
          "Usafi wa vyumba unaendeshwa kwa kupiga kelele na kukumbuka.",
          "Wageni wanaondoka na kutoweka; hakuna kumbukumbu ya kuwarudisha.",
        ],
        mockupCaption:
          "Hali ya leo kwa mtazamo mmoja; vyumba, bili, usafi.",
        screenshots: [
          {
            ...SHOT_FILES.hotelRooms,
            alt: "Ubao halisi wa vyumba wa SmartHotels",
            caption:
              "Ubao halisi wa vyumba wa SmartHotels: vilivyo wazi, vilivyokaliwa, na usafi kwa mtazamo mmoja. Majina ya wageni yamefichwa.",
          },
        ],
        miniFaq: [
          {
            question: "Inahusisha mgahawa na baa?",
            answer:
              "Ndiyo. Bili za mgahawa na baa zimejengwa ndani, kila gharama inafika kwenye bili sahihi ya mgeni.",
          },
          {
            question: "Naweza kuiona hoteli nikiwa safarini?",
            answer:
              "Ndiyo. Dashibodi ya mmiliki inaonyesha uhifadhi, hali ya vyumba, na bili papo hapo kwenye simu yako, popote ulipo.",
          },
          STAFF_FAQ.sw,
        ],
        cta: {
          heading: "Endesha hoteli iliyojaa bila vurugu.",
          sub: "Ujumbe mmoja wa WhatsApp. Tutakuonyesha SmartHotels na kukupa bei kwa hoteli yako.",
        },
      },
      smartcolleges: {
        slug: "smartcolleges",
        heroEyebrow: "Kwa vyuo vilivyo chini ya NACTVET",
        heroSub:
          "SmartColleges inakusanya mahitaji ya NACTVET moja kwa moja; pamoja na % ya mahudhurio; na kutoa ripoti tayari kwa kuwasilishwa. Kumbukumbu za wanafunzi, matokeo, ada, na SMS kwa wazazi, kwenye mfumo mmoja.",
        highlight: {
          title: "Imejengwa kuzunguka mahitaji ya NACTVET",
          body: "% ya mahudhurio inakusanywa moja kwa moja, muhula kwa muhula. Ripoti zinatoka tayari kwa kuwasilishwa; si kukusanywa kwa mkono wiki moja kabla.",
        },
        painsHeading: "Imejengwa kwa wasajili waliochoka na makaratasi",
        pains: [
          "Ripoti za NACTVET zinakusanywa kwa mkono kutoka rejista za karatasi, kila muhula.",
          "Asilimia za mahudhurio zimetawanyika kwenye rejista za madarasa.",
          "Bakaa za ada ambazo hakuna anayeweza kuzitaja kwa uhakika.",
          "Wazazi na wanafunzi hawasikii chochote mpaka kuna tatizo.",
        ],
        mockupCaption:
          "Mahudhurio, uzingatiaji, na ada; tayari NACTVET wakiuliza.",
        screenshots: [
          {
            ...SHOT_FILES.collegeResults,
            alt: "Ripoti halisi ya matokeo ya moduli kutoka SmartColleges",
            caption:
              "Matokeo halisi ya moduli, yanakokotolewa na kupangwa daraja moja kwa moja mara CAT zinapofungwa.",
          },
          {
            ...SHOT_FILES.collegeAttendance,
            alt: "Ripoti halisi ya mahudhurio kutoka SmartColleges",
            caption:
              "Ripoti halisi ya mahudhurio; asilimia zinakokotolewa moja kwa moja, tayari kwa NACTVET. Taarifa za wanafunzi zimefichwa.",
          },
        ],
        miniFaq: [
          {
            question: "Inatoa kile NACTVET wanachohitaji?",
            answer:
              "Ndiyo. Inakusanya mahitaji moja kwa moja; pamoja na % ya mahudhurio; na ripoti zinatoka tayari kwa kuwasilishwa.",
          },
          {
            question: "Wazazi na wanafunzi wanaweza kupata taarifa?",
            answer:
              "Ndiyo. Taarifa za SMS kwa wazazi na wanafunzi zimejengwa ndani; matokeo, ada, na matangazo.",
          },
          {
            question: "Inagharimu kiasi gani kwa chuo?",
            answer:
              "Vyuo vinafaa mpango wa Max wa TZS 100,000/mwezi; matawi, ripoti za kina, na ziara za chuoni zinajumuishwa. Usimikaji unategemea ukubwa; bei kamili baada ya ziara ya bure.",
          },
        ],
        cta: {
          heading: "Kuwa tayari kabla NACTVET hawajauliza.",
          sub: "Ujumbe mmoja wa WhatsApp. Tutakuonyesha ripoti ambazo chuo chako kingewasilisha.",
        },
      },
    },
  };
