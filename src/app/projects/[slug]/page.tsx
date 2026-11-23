import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import { CaseStudyLayout } from "@/components/projects/CaseStudyLayout";

type Params = { slug: string };

export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return buildMetadata({ title: p.metaTitle, description: p.metaDescription, path: `/projects/${p.slug}`, ogType: "article" });
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const i = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const related = projects.filter((p) => p.slug !== project.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: project.metaTitle,
      description: project.metaDescription,
      url: absoluteUrl(`/projects/${project.slug}`),
      isPartOf: { "@id": `${siteConfig.url}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.metaDescription,
      genre: project.type,
      creator: { "@id": `${siteConfig.url}/#person` },
      keywords: project.keywords.join(", "),
      url: absoluteUrl(`/projects/${project.slug}`),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseStudyLayout project={project} prev={prev} next={next} related={related} />
    </>
  );
}
