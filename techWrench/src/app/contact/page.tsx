import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Tech Wrench",
  description:
    "Contact Tech Wrench to discuss your web development needs or request a free quote.",
  alternates: {
    canonical: "https://techwrench.co/contact",
  },
  openGraph: {
    title: "Contact Tech Wrench",
    description:
      "Contact Tech Wrench to discuss your web development needs or request a free quote.",
    url: "https://techwrench.co/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}
