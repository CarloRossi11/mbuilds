import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Tech Wrench",
  description:
    "Learn about Tech Wrench, a leading web development company.",
  alternates: {
    canonical: "https://techwrench.co/about",
  },
  openGraph: {
    title: "About Tech Wrench",
    description:
      "Learn about Tech Wrench, a leading web development company.",
    url: "https://techwrench.co/about",
  },
};

export default function Page() {
  return <AboutClient />;
}
