import type { Metadata } from "next";
import { siteConfig } from "./constants";

export const absoluteUrl = (path = "/") => `${siteConfig.url}${path === "/" ? "/" : path}`;

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(opts.path);
  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: `${siteConfig.name} — ${siteConfig.tagline}`,
      locale: siteConfig.locale,
      type: opts.ogType ?? "website",
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
  url: absoluteUrl("/"),
  email: `mailto:${siteConfig.email}`,
  description:
    "Aspiring digital marketing professional and Computer Engineering graduate exploring SEO, social media, content strategy and AI-powered marketing.",
  address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "SSPM's Sharadchandra Pawar College of Engineering and Technology (SPPU)" },
    { "@type": "EducationalOrganization", name: "Government Polytechnic Awasari" },
  ],
  knowsAbout: ["SEO", "Social media marketing", "Content strategy", "Google Ads", "Meta Ads", "AI marketing"],
  sameAs: [siteConfig.linkedin],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: `${siteConfig.name} — ${siteConfig.tagline}`,
  url: absoluteUrl("/"),
  inLanguage: "en-IN",
  publisher: { "@id": `${siteConfig.url}/#person` },
};
