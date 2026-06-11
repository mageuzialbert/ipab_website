import type { Lang } from "@/lib/i18n";

/**
 * Real client logos provided by Albert (June 2026), cleaned into
 * public/client-logos/. Display rule (DESIGN_SYSTEM.md): grayscale at
 * 60% opacity, full color on hover. Names only; no industry labels or
 * claims beyond what the logos themselves say.
 */

export type Client = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export const CLIENTS: Client[] = [
  {
    name: "PIO Pharmacy",
    src: "/client-logos/pio-pharmacy.png",
    width: 561,
    height: 193,
  },
  {
    name: "oraimo Shops Tanzania",
    src: "/client-logos/oraimo.png",
    width: 451,
    height: 169,
  },
  {
    name: "Hotel Rolax",
    src: "/client-logos/hotel-rolax.png",
    width: 164,
    height: 61,
  },
  {
    name: "House of Trice",
    src: "/client-logos/house-of-trice.png",
    width: 416,
    height: 350,
  },
  {
    name: "JB Series Hotel",
    src: "/client-logos/jb-series-hotel.png",
    width: 123,
    height: 110,
  },
  {
    name: "Ubepari Pc",
    src: "/client-logos/ubepari-pc.png",
    width: 239,
    height: 81,
  },
  {
    name: "NOBO College",
    src: "/client-logos/nobo-college.png",
    width: 380,
    height: 140,
  },
  {
    // TODO (Albert): confirm spelling; source file said "afyaleadl"
    name: "AfyaLead",
    src: "/client-logos/afyalead.png",
    width: 148,
    height: 189,
  },
  {
    name: "Dubai Aluminium Profile",
    src: "/client-logos/dubai-aluminium-profile.png",
    width: 571,
    height: 151,
  },
  {
    name: "Padre Pio College",
    src: "/client-logos/padre-pio-college.png",
    width: 224,
    height: 216,
  },
];

export const SHOWCASE: Record<
  Lang,
  { eyebrow: string; heading: string; closer: string }
> = {
  en: {
    eyebrow: "Our clients",
    heading: "Trusted by businesses you know.",
    closer: "Part of the 1,220+ businesses running on iPAB every day.",
  },
  sw: {
    eyebrow: "Wateja wetu",
    heading: "Inaaminiwa na biashara unazozifahamu.",
    closer: "Miongoni mwa biashara 1,220+ zinazotumia iPAB kila siku.",
  },
};
