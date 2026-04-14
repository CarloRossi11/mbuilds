import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Premium Contracting Services | Mitchell Builds",
  description: "Mitchell Builds offers top-tier contracting services, specializing in custom home builds, renovations, and commercial projects. Our expert team delivers exceptional craftsmanship and personalized solutions to bring your vision to life.",
  alternates: {
    canonical: "https://mitchellbuilds.netlify.app/",
  },

  openGraph: {
    title: "Premium Contracting Services | Mitchell Builds",
    description: "Mitchell Builds offers top-tier contracting services, specializing in custom home builds, renovations, and commercial projects.",
    url: "https://mitchellbuilds.netlify.app/",
    siteName: "Mitchell Builds",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return <HomeClient />;
}
