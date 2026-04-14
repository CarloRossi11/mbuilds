import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Bebas_Neue, Raleway } from "next/font/google";

const pressura = localFont({
  src: "./fonts/GT-Pressura-Bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-pressura",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mitchell Builds | Premium Contracting Services",
  description:
    "Mitchell Builds offers professional contracting services, specializing in custom home builds, renovations, and commercial projects.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Mitchell Builds | Premium Contracting Services",
    description:
      "Professional contracting services specializing in custom home builds, renovations, and commercial projects.",
    url: "https://mitchellbuilds.netlify.app",
    siteName: "Mitchell Builds",
    images: [
      {
        url: "https://mitchellbuilds.netlify.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mitchell Builds | Premium Contracting Services",
    description:
      "Professional contracting services specializing in custom home builds, renovations, and commercial projects.",
    images: ["https://mitchellbuilds.netlify.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pressura.variable} ${bebasNeue.variable} ${raleway.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Tech Wrench",
              url: "https://techwrench.co",
              telephone: "+1-412-965-8201",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1812 Tyburn Ln",
                addressLocality: "Pittsburgh",
                addressRegion: "PA",
                postalCode: "15421",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Pittsburgh, PA",
              },
              serviceType: [
                "Website Development",
                "Custom Websites",
                "Lead Generation Websites",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
