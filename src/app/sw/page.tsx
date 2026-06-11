import type { Metadata } from "next";
import HomeView from "@/views/HomeView";

export const metadata: Metadata = {
  alternates: { canonical: "/sw", languages: { en: "/", sw: "/sw" } },
};

export default function SwHomePage() {
  return <HomeView lang="sw" />;
}
