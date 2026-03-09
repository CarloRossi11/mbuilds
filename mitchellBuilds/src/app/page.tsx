import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Custom Website Development Services | Tech Wrench",
  description: "Custom high performing websites developed just for you by Tech Wrench.",
  alternates: {
    canonical: "https://techwrench.co/",
  },

  openGraph: {
    title: "Custom Website Development Services | Tech Wrench",
    description:"Custom high performing websites developed just for you by Tech Wrench.",
    url: "https://techwrench.co/",
    siteName: "Tech Wrench",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return <HomeClient />;
}
