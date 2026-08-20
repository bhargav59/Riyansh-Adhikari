import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { profile, socials, videos, faq } from "@/data/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://riyansh-adhikari.pages.dev";
const siteName = "Riyansh Adhikari — Mr. Sarlahi 2021";
const description =
  "Riyansh Adhikari (Rupesh Kumar Yadav), winner of Sarlahi Fashion Runway 2021 and former Brand Ambassador of Pageant Nepal International. High-fashion and runway model from Sarlahi, Nepal. Book for campaigns, fashion shows and editorial shoots.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "Riyansh Adhikari",
    "Rupesh Kumar Yadav",
    "Mr Sarlahi 2021",
    "Sarlahi Fashion Runway",
    "Pageant Nepal International",
    "Nepal model",
    "fashion model Nepal",
    "runway model Nepal",
    "Mr. Model of Sarlahi",
    "Nepali male model",
  ],
  authors: [{ name: "Riyansh Adhikari", url: siteUrl }],
  creator: "Riyansh Adhikari",
  publisher: "Riyansh Adhikari",
  category: "Fashion Model Portfolio",
  alternates: { canonical: "/" },
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    type: "profile",
    siteName,
    locale: "en_US",
    firstName: "Riyansh",
    lastName: "Adhikari",
    username: "RiyanshAdhikari",
    images: [
      {
        url: "/images/pni-studio-01.jpg",
        width: 600,
        height: 750,
        alt: "Riyansh Adhikari — Mr. Sarlahi 2021, official studio portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/images/pni-studio-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Riyansh Adhikari",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    email: false,
  },
  other: {
    "geo.region": "NP-P2",
    "geo.placename": "Sarlahi, Nepal",
    "geo.position": "26.8600;85.5300",
    ICBM: "26.8600, 85.5300",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.stageName,
      alternateName: profile.legalName,
      url: siteUrl,
      image: `${siteUrl}/images/pni-studio-01.jpg`,
      description,
      jobTitle: ["High-Fashion & Runway Model", "Cluster Sales Executive"],
      nationality: "Nepalese",
      birthPlace: { "@type": "Place", name: "Sarlahi, Nepal" },
      homeLocation: { "@type": "Place", name: "Sarlahi, Nepal" },
      knowsLanguage: [
        "Nepali",
        "English",
        "Hindi",
        "Bajjika",
        "Maithili",
        "Bhojpuri",
      ],
      award: [
        "Mr. Sarlahi 2021 — Sarlahi Fashion Runway",
        "Brand Ambassador, Pageant Nepal International (1 year)",
      ],
      sameAs: socials.map((social) => social.url),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteName,
      description,
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      primaryImageOfPage: `${siteUrl}/images/pni-studio-01.jpg`,
    },
    ...videos.map((video) => ({
      "@type": "VideoObject",
      name: video.title,
      description: video.title,
      thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
      uploadDate: "2021-10-17",
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
      contentUrl: video.url,
      publisher: { "@id": `${siteUrl}/#person` },
    })),
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-ink text-cream antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}