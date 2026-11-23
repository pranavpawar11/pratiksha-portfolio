import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, index, featured }: { project: Project; index: number; featured?: boolean }) {
  const tone = index % 2 === 0 ? "bg-accent text-on-accent" : "bg-sage text-[#191919]";
  return (
    <article className={cn("group grid gap-6 border-t border-line pt-8", featured ? "lg:grid-cols-[1.1fr_1fr] lg:gap-12" : "lg:grid-cols-[1fr_1.1fr] lg:gap-12")}>
      <Link href={`/projects/${project.slug}`} aria-hidden tabIndex={-1} className={cn("relative flex aspect-[4/3] items-end overflow-hidden p-6 sm:p-8", tone, !featured && "lg:order-2")}>
        <span className="font-serif text-[clamp(3rem,9vw,6.5rem)] leading-[0.9] tracking-tight">{project.shortTitle}</span>
        <ArrowUpRight aria-hidden className="absolute right-5 top-5 size-7 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </Link>
      <div className="flex flex-col justify-center">
        <Badge tone={index % 2 === 0 ? "sand" : "sage"} className="self-start">{project.type}</Badge>
        <h3 className="h-project mt-4">
          <Link href={`/projects/${project.slug}`} className="hover:text-accent-text focus-visible:text-accent-text">{project.title}</Link>
        </h3>
        <p className="mt-4 text-muted">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="What I worked on">
          {project.activities.slice(0, featured ? 7 : 5).map((a) => (
            <li key={a} className="border border-line px-2.5 py-1 text-[0.8rem] text-muted">{a}</li>
          ))}
        </ul>
        <p className="mt-5 text-sm"><span className="label mr-2 text-muted">Tools</span>{project.tools.join(", ")}</p>
        <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 self-start font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-text">
          Read the Case Study<span className="sr-only"> for {project.shortTitle}</span><ArrowUpRight aria-hidden className="size-4" />
        </Link>
      </div>
    </article>
  );
}
