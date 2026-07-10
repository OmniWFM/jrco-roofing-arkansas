import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://jrcoroofing.com"),
  title: {
    default: "JR & Co. Roofing | Commercial & Residential Roofing in Arkansas",
    template: "%s | JR & Co. Roofing Arkansas",
  },
  description:
    "Veteran-owned commercial and residential roofing contractor serving all of Arkansas since 1986. Free inspections in Bentonville, Fayetteville, Rogers, Springdale and statewide. Call (479) 534-2952.",
  keywords: [
    "commercial roofing Arkansas",
    "roofing contractor Arkansas",
    "Bentonville roofing",
    "Fayetteville roofing",
    "Northwest Arkansas roofing",
    "metal roofing Arkansas",
    "roof repair Arkansas",
  ],
  openGraph: {
    title: "JR & Co. Roofing | Commercial & Residential Roofing in Arkansas",
    description:
      "Veteran-owned roofing done right the first time. Serving all of Arkansas since 1986.",
    url: "https://jrcoroofing.com",
    siteName: "JR & Co. Roofing",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JR & Co. Roofing Arkansas",
    description:
      "Veteran-owned commercial & residential roofing serving all of Arkansas since 1986.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "JR & Co. Roofing",
  description:
    "Veteran-owned commercial and residential roofing contractor serving all of Arkansas since 1986.",
  url: "https://jrcoroofing.com",
  telephone: "+1-479-534-2952",
  foundingDate: "1986",
  areaServed: {
    "@type": "State",
    name: "Arkansas",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "AR",
    addressCountry: "US",
  },
  priceRange: "$$",
  makesOffer: [
    "Commercial Roofing",
    "Residential Roofing",
    "Roof Repair & Service",
    "Metal Roofing",
    "Architectural Cladding",
    "Solar Roof Systems",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
