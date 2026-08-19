import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Riyansh Adhikari — Mr. Sarlahi 2021 | High-Fashion & Runway Model",
  description:
    "Riyansh Adhikari (Rupesh Kumar Yadav), winner of Sarlahi Fashion Runway 2021 and former Brand Ambassador of Pageant Nepal International. High-fashion and runway model from Sarlahi, Nepal. Book him for campaigns, fashion shows and editorial shoots.",
  keywords: [
    "Riyansh Adhikari",
    "Rupesh Kumar Yadav",
    "Mr Sarlahi 2021",
    "Sarlahi Fashion Runway",
    "Pageant Nepal International",
    "Nepal model",
    "fashion model Nepal",
    "runway model",
  ],
  openGraph: {
    title: "Riyansh Adhikari — Mr. Sarlahi 2021",
    description:
      "Winner, Sarlahi Fashion Runway 2021 · Former Brand Ambassador, Pageant Nepal International. High-fashion & runway model from Nepal.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/pni-studio-01.jpg",
        width: 600,
        height: 750,
        alt: "Riyansh Adhikari — Mr. Sarlahi 2021, official studio portrait",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
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