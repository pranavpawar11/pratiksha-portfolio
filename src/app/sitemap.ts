import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({ url: absoluteUrl(`/projects/${p.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
