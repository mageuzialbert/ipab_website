import type { Lang } from "@/lib/i18n";

/**
 * Real field photos provided by Albert (June 2026), cropped from Instagram
 * posts into public/photos/. Real clients, real installs; never stock.
 * Swahili drafted in translation; TODO (Albert): review before launch.
 */

export type FieldPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

const PHOTO_FILES = {
  visit: { src: "/photos/photo-visit.webp", width: 1200, height: 900 },
  install: { src: "/photos/photo-install.webp", width: 1200, height: 900 },
  // TODO (Albert): confirm Limatuka Jr. Pharmacy can be named/shown publicly
  storefront: { src: "/photos/photo-storefront.webp", width: 1200, height: 900 },
  library: { src: "/photos/photo-library.webp", width: 1200, height: 900 },
  teamHot: { src: "/photos/photo-team-hot.webp", width: 1200, height: 900 },
  training: { src: "/photos/photo-training.webp", width: 1200, height: 900 },
};

type Gallery = {
  eyebrow: string;
  heading: string;
  photos: FieldPhoto[];
};

/** Home; mirrors the three How-it-works steps with real proof. */
export const HOME_GALLERY: Record<Lang, Gallery> = {
  en: {
    eyebrow: "In the field",
    heading: "Real visits. Real installs.",
    photos: [
      {
        ...PHOTO_FILES.visit,
        alt: "An iPAB consultant and a client shaking hands over a laptop running the system",
        caption: "We sit with you and study how your business runs.",
      },
      {
        ...PHOTO_FILES.install,
        alt: "A POS terminal installed at the House of Trice bar counter",
        caption: "Install day at House of Trice; POS live at the counter.",
      },
      {
        ...PHOTO_FILES.storefront,
        alt: "A pharmacy storefront running SmartPoint",
        caption: "A SmartPoint pharmacy, open for business.",
      },
    ],
  },
  sw: {
    eyebrow: "Kazini",
    heading: "Ziara halisi. Usimikaji halisi.",
    photos: [
      {
        ...PHOTO_FILES.visit,
        alt: "Mshauri wa iPAB na mteja wakipeana mikono mbele ya kompyuta yenye mfumo",
        caption: "Tunakaa nawe na kuisoma jinsi biashara yako inavyoendeshwa.",
      },
      {
        ...PHOTO_FILES.install,
        alt: "POS imefungwa kwenye kaunta ya baa ya House of Trice",
        caption: "Siku ya usimikaji House of Trice; POS iko kazini kaunta.",
      },
      {
        ...PHOTO_FILES.storefront,
        alt: "Duka la dawa linalotumia SmartPoint",
        caption: "Duka la dawa linalotumia SmartPoint, liko wazi kwa biashara.",
      },
    ],
  },
};

/** Why iPAB; the team at work with clients. */
export const WHY_GALLERY: Record<Lang, Gallery> = {
  en: {
    eyebrow: "With our clients",
    heading: "We stay until it works.",
    photos: [
      {
        ...PHOTO_FILES.library,
        alt: "iPAB working session with staff at NOBO College",
        caption: "Working session at NOBO College.",
      },
      {
        ...PHOTO_FILES.teamHot,
        alt: "iPAB team with client staff at the House of Trice POS",
        caption: "With the team at House of Trice.",
      },
      {
        ...PHOTO_FILES.training,
        alt: "Staff training session with a projector in a classroom",
        caption: "Staff training, on site.",
      },
    ],
  },
  sw: {
    eyebrow: "Pamoja na wateja wetu",
    heading: "Tunabaki mpaka ufanikiwe.",
    photos: [
      {
        ...PHOTO_FILES.library,
        alt: "Kikao cha kazi cha iPAB na wafanyakazi wa NOBO College",
        caption: "Kikao cha kazi NOBO College.",
      },
      {
        ...PHOTO_FILES.teamHot,
        alt: "Timu ya iPAB na wafanyakazi wa mteja kwenye POS ya House of Trice",
        caption: "Pamoja na timu ya House of Trice.",
      },
      {
        ...PHOTO_FILES.training,
        alt: "Mafunzo ya wafanyakazi darasani kwa kutumia projekta",
        caption: "Mafunzo ya wafanyakazi, kazini kwa mteja.",
      },
    ],
  },
};
