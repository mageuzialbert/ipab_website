import type { Metadata } from "next";
import HomeView from "@/views/HomeView";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { en: "/", sw: "/sw" } },
};

export default function HomePage() {
  return <HomeView lang="en" />;
}
