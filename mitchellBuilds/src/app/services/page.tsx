import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Tech Wrench Services",
  description:
    "View the services offered by Tech Wrench, specializing in custom web development for small businesses.",
  alternates: {
    canonical: "https://techwrench.co/services",
  },
  openGraph: {
    title: "Tech Wrench Services",
    description:
      "View the services offered by Tech Wrench, specializing in custom web development for small businesses.",
    url: "https://techwrench.co/services",
  },
};

export default function Page() {
  return <ServicesClient />;
}
