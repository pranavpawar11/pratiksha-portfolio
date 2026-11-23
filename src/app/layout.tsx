import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/lib/constants";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";

const playfair = localFont({
  src: [
    { path: "../fonts/playfair.woff2", style: "normal", weight: "400 900" },
    { path: "../fonts/playfair-italic.woff2", style: "italic", weight: "400 900" },
  ],
  variable: "--font-playfair",
  display: "swap",
});
const inter = localFont({
  src: "../fonts/inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});
const grotesk = localFont({
  src: "../fonts/space-grotesk.woff2",
  variable: "--font-grotesk",
  weight: "300 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Pratiksha Shelke | Digital Marketing Portfolio | SEO & Social Media",
    template: "%s",
  },
  description:
    "Explore Pratiksha Shelke's digital marketing portfolio featuring SEO research, social media strategy, content marketing projects and AI marketing knowledge. Based in Pune, India.",
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  keywords: [
    "Digital Marketing Portfolio",
    "Digital Marketing Fresher Portfolio",
    "Aspiring Digital Marketer",
    "SEO and Social Media Marketing",
    "Digital Marketing Portfolio Pune",
  ],
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1e9" },
    { media: "(prefers-color-scheme: dark)", color: "#171715" },
  ],
  viewportFit: "cover",
};

// Runs before first paint so the correct theme is applied with no flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" data-theme="light" suppressHydrationWarning className={`${playfair.variable} ${inter.variable} ${grotesk.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd]) }} />
      </head>
      <body>
        <a
          href="#main"
          className="label fixed left-4 top-3 z-[100] -translate-y-20 rounded bg-fg px-4 py-3 text-bg focus:translate-y-0"
        >
          Skip to Main Content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
