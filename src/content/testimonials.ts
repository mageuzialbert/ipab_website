import type { Lang } from "@/lib/i18n";
import type { SolutionSlug } from "@/content/solutions";

export type Testimonial = {
  quote: string;
  /** Exact client name; must match CLIENTS in clients.ts. */
  business: string;
  /** The product this client runs; badge links to its solution page. */
  solutionName: string;
  solutionSlug: SolutionSlug;
  photo: { src: string; width: number; height: number };
  alt: string;
};

/**
 * Real client quotes provided by Albert (June 2026), lightly rephrased for
 * grammar and flow — NEVER beyond what the client actually said; no invented
 * names, numbers, or claims (CONTENT.md). Storefront photos in public/photos/.
 * First entry renders as the featured card. Swahili is an AI draft —
 * TODO (Albert): review before launch. TODO (Albert): confirm each client
 * approved being quoted and shown publicly.
 */
const PHOTO = {
  rolax: { src: "/photos/client-hotel-rolax.jpg", width: 1104, height: 958 },
  oraimo: { src: "/photos/client-oraimo.jpg", width: 1116, height: 968 },
  ubepari: { src: "/photos/client-ubepari.jpg", width: 1100, height: 958 },
  pio: { src: "/photos/client-pio-pharmacy.jpg", width: 1106, height: 1010 },
  nobo: { src: "/photos/client-nobo-college.jpg", width: 1200, height: 818 },
};

export const TESTIMONIALS: Record<Lang, Testimonial[]> = {
  en: [
    {
      quote:
        "SmartHotels was easier for our staff than anything we'd used before — and the customization sealed it. Every department now records and pulls exactly the data it needs.",
      business: "Hotel Rolax",
      solutionName: "SmartHotels",
      solutionSlug: "smarthotels",
      photo: PHOTO.rolax,
      alt: "Hotel Rolax, a multi-storey hotel running iPAB's SmartHotels",
    },
    {
      quote:
        "SmartPoint systematized how we operate. We run across several regions with different staff, yet every customer gets the same standard experience — everywhere.",
      business: "oraimo Shops Tanzania",
      solutionName: "SmartPoint",
      solutionSlug: "smartpoint",
      photo: PHOTO.oraimo,
      alt: "An oraimo shop in Tanzania running SmartPoint",
    },
    {
      quote:
        "We needed unit-level tracking with our own barcodes, on top of real stock control and reporting. SmartPoint gave us all of it — right down to managing our clients.",
      business: "Ubepari Pc",
      solutionName: "SmartPoint",
      solutionSlug: "smartpoint",
      photo: PHOTO.ubepari,
      alt: "The Ubepari PC storefront running SmartPoint",
    },
    {
      quote:
        "With a working system, local support is everything. We came for the pharmacy features and got more than we imagined — managed catalogues, multiple units, and AI analytics.",
      business: "PIO Pharmacy",
      solutionName: "SmartPharmacy",
      solutionSlug: "smartpharmacy",
      photo: PHOTO.pio,
      alt: "PIO Pharmacy storefront running SmartPharmacy",
    },
    {
      quote:
        "Compiling NACTVET attendance reports and getting results to each student used to be a headache. SmartColleges solved it.",
      business: "NOBO College",
      solutionName: "SmartColleges",
      solutionSlug: "smartcolleges",
      photo: PHOTO.nobo,
      alt: "Students at NOBO College, which runs SmartColleges",
    },
  ],
  sw: [
    {
      quote:
        "SmartHotels ilikuwa rahisi kwa wafanyakazi wetu kuliko mfumo wowote tuliotumia awali — na uboreshaji maalum ndio ulioamua. Sasa kila idara inarekodi na kupata taarifa inazohitaji hasa.",
      business: "Hotel Rolax",
      solutionName: "SmartHotels",
      solutionSlug: "smarthotels",
      photo: PHOTO.rolax,
      alt: "Hotel Rolax, hoteli ya ghorofa inayotumia SmartHotels ya iPAB",
    },
    {
      quote:
        "SmartPoint imeweka mpangilio kwenye uendeshaji wetu. Tunafanya kazi mikoa kadhaa kwa wafanyakazi tofauti, lakini kila mteja anapata huduma ya kiwango kimoja — kila mahali.",
      business: "oraimo Shops Tanzania",
      solutionName: "SmartPoint",
      solutionSlug: "smartpoint",
      photo: PHOTO.oraimo,
      alt: "Duka la oraimo Tanzania linalotumia SmartPoint",
    },
    {
      quote:
        "Tulihitaji ufuatiliaji wa kila kipande kwa barcode zetu wenyewe, juu ya udhibiti wa bidhaa na ripoti. SmartPoint ilitupa yote — hadi kusimamia wateja wetu.",
      business: "Ubepari Pc",
      solutionName: "SmartPoint",
      solutionSlug: "smartpoint",
      photo: PHOTO.ubepari,
      alt: "Duka la Ubepari PC linalotumia SmartPoint",
    },
    {
      quote:
        "Kwenye mfumo unaofanya kazi, msaada wa karibu ndio kila kitu. Tulikuja kwa huduma za duka la dawa, tukapata zaidi ya tulivyofikiria — katalogi, vipimo tofauti, na uchambuzi wa AI.",
      business: "PIO Pharmacy",
      solutionName: "SmartPharmacy",
      solutionSlug: "smartpharmacy",
      photo: PHOTO.pio,
      alt: "Duka la PIO Pharmacy linalotumia SmartPharmacy",
    },
    {
      quote:
        "Kuandaa ripoti za mahudhurio za NACTVET na kufikisha matokeo kwa kila mwanafunzi ilikuwa kero. SmartColleges ilitatua.",
      business: "NOBO College",
      solutionName: "SmartColleges",
      solutionSlug: "smartcolleges",
      photo: PHOTO.nobo,
      alt: "Wanafunzi wa NOBO College, inayotumia SmartColleges",
    },
  ],
};
