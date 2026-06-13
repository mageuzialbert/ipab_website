import type { Lang } from "@/lib/i18n";

/**
 * The iPAB team for the "people who pick up at 2am" section on the Why page.
 * Names verbatim as provided by Albert (June 2026); never invent people.
 * Titles + taglines are drafts in the iPAB voice; Swahili drafted in
 * translation. TODO (Albert): review titles, taglines, and Swahili before
 * launch — and confirm Paskazia's full name/spelling (only a first name given).
 *
 * Photos: monogram avatars (initials) for now — LinkedIn/Instagram images
 * can't be hosted (auth-gated, expiring URLs; static export serves local
 * files only). When real headshots arrive, drop them in /public/team/ and
 * render <Image> in TeamGrid; `initials` stays as the fallback.
 */

export type TeamMember = {
  /** Same in both languages. */
  name: string;
  /** For the monogram avatar, e.g. "PK". */
  initials: string;
  /** Translatable. */
  title: string;
  /** Evocative role line, in the spirit of the section heading. Translatable. */
  tagline: string;
  /**
   * Optional headshot. LinkedIn/Instagram images can't be hotlinked or
   * auto-fetched (auth-gated, expiring URLs; static export serves local
   * files only). To show a real photo: save the headshot into
   * /public/team/ and set this to its path, e.g. "/team/albert.webp".
   * Until then the monogram avatar shows.
   */
  image?: string;
  linkedin?: string;
  instagram?: string;
};

const LINKS = {
  isaya: {},
  albert: { linkedin: "https://www.linkedin.com/in/albert-mageuzi-6b74771b6/" },
  paschal: {
    linkedin: "https://www.linkedin.com/in/paschal-kija-md-7277a724a/",
  },
  justine: {
    linkedin: "https://www.linkedin.com/in/justine-byabato-b92943262/",
  },
  valentina: {
    linkedin: "https://www.linkedin.com/in/valentina-simon-68b663254/",
    instagram: "https://www.instagram.com/valentina_thomas30/",
  },
  janeth: {},
  paskazia: {},
};

export const TEAM: Record<
  Lang,
  { heading: string; members: TeamMember[] }
> = {
  en: {
    heading: "The people who pick up at 2am",
    members: [
      {
        name: "Isaya Tarimo",
        initials: "IT",
        title: "CEO & Product Engineer",
        tagline: "Started by counting other people's stock.",
        ...LINKS.isaya,
      },
      {
        name: "Albert Mageuzi",
        initials: "AM",
        title: "Technical Director",
        tagline: "Turns the bleeding into systems that hold.",
        ...LINKS.albert,
      },
      {
        name: "Paschal Kija, MD",
        initials: "PK",
        title: "External Relations Director",
        tagline: "Keeps our name good in every room.",
        ...LINKS.paschal,
      },
      {
        name: "Justine Byabato",
        initials: "JB",
        title: "Product Design & Sales Director",
        tagline: "Designs what you touch every day.",
        ...LINKS.justine,
      },
      {
        name: "Valentina Simon",
        initials: "VS",
        title: "Brand & Communications",
        tagline: "The voice of iPAB.",
        ...LINKS.valentina,
      },
      {
        name: "Janeth Nsanya",
        initials: "JN",
        title: "SmartPharmacy Catalogue Manager (Pharmtech)",
        tagline: "Knows every drug on the shelf.",
        ...LINKS.janeth,
      },
      {
        // TODO (Albert): confirm full name / spelling and any LinkedIn.
        name: "Paskazia",
        initials: "P",
        title: "Admin Officer",
        tagline: "Holds the office together.",
        ...LINKS.paskazia,
      },
    ],
  },
  sw: {
    heading: "Watu wanaopokea simu saa nane usiku",
    members: [
      {
        name: "Isaya Tarimo",
        initials: "IT",
        title: "Mkurugenzi Mtendaji & Mhandisi wa Bidhaa",
        tagline: "Alianza kwa kuhesabu stoo za watu wengine.",
        ...LINKS.isaya,
      },
      {
        name: "Albert Mageuzi",
        initials: "AM",
        title: "Mkurugenzi wa Teknolojia",
        tagline: "Anabadilisha hasara kuwa mifumo inayodumu.",
        ...LINKS.albert,
      },
      {
        name: "Paschal Kija, MD",
        initials: "PK",
        title: "Mkurugenzi wa Mahusiano ya Nje",
        tagline: "Analinda jina letu kila chumba.",
        ...LINKS.paschal,
      },
      {
        name: "Justine Byabato",
        initials: "JB",
        title: "Mkurugenzi wa Ubunifu wa Bidhaa & Mauzo",
        tagline: "Anabuni kile unachogusa kila siku.",
        ...LINKS.justine,
      },
      {
        name: "Valentina Simon",
        initials: "VS",
        title: "Chapa & Mawasiliano",
        tagline: "Sauti ya iPAB.",
        ...LINKS.valentina,
      },
      {
        name: "Janeth Nsanya",
        initials: "JN",
        title: "Meneja wa Katalogi SmartPharmacy (Pharmtech)",
        tagline: "Anajua kila dawa rafuni.",
        ...LINKS.janeth,
      },
      {
        // TODO (Albert): thibitisha jina kamili na LinkedIn kama lipo.
        name: "Paskazia",
        initials: "P",
        title: "Afisa Utawala",
        tagline: "Anashikilia ofisi pamoja.",
        ...LINKS.paskazia,
      },
    ],
  },
};
