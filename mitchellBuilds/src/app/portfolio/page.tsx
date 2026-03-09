import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Web Development Portfolio",
  description:
    "View our web development portfolio showcasing our latest projects and success stories.",
  alternates: {
    canonical: "https://techwrench.co/portfolio",
  },
  openGraph: {
    title: "Web Development Portfolio",
    description:
      "View our web development portfolio showcasing our latest projects and success stories.",
    url: "https://techwrench.co/portfolio",
  },
};

export default function Page() {
  return <PortfolioClient />;
}
