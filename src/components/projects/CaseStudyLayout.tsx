import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Placeholder } from "@/components/ui/Placeholder";
import Image from "next/image";

function Block({ id, label, children }: { id?: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="anchor grid gap-4 border-t border-line py-10 md:grid-cols-[200px_1fr] md:gap-12 md:py-12">
      <h2 className="label text-accent-text !font-label">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

export function CaseStudyLayout({ project, prev, next, related }: { project: Project; prev: Project; next: Project; related: Project[] }) {
  return (
    <article>
      <header className="border-b border-line bg-alt py-14 md:py-20">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link href="/#projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-accent-text"><ArrowLeft aria-hidden className="size-4" />Back to Projects</Link>
          </nav>
          <Badge tone="accent">{project.type}</Badge>
          <h1 className="h-hero mt-5 max-w-4xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{project.overview}</p>
          <p className="mt-6 text-sm"><span className="label mr-2 text-muted">Tools</span>{project.tools.join(", ")}</p>
        </Container>
      </header>

      <Container className="pb-10">
        <Block label="Objective"><p className="h-card max-w-2xl !font-normal">{project.objective}</p></Block>

        <Block label="Target Audience">
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.audience.map((a) => <li key={a} className="border-l-2 border-sage pl-4">{a}</li>)}
          </ul>
        </Block>

        <Block label="Research">
          <ul className="space-y-2">
            {project.research.map((r) => <li key={r} className="flex gap-3"><span aria-hidden className="mt-3 size-1.5 shrink-0 bg-accent" />{r}</li>)}
          </ul>
        </Block>

        <Block label="Strategy">
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {project.strategy.map((s) => (
              <div key={s.title} className="bg-bg p-6 sm:first:pl-0">
                <h3 className="h-card">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block label="Execution" id="execution">
          <ol className="space-y-8">
            {project.execution.map((e, i) => (
              <li key={e.title} id={e.id} className="anchor grid gap-1 sm:grid-cols-[3rem_1fr]">
                <span aria-hidden className="font-serif text-2xl text-accent-text tabular">{String(i + 1).padStart(2, "0")}</span>
                <div><h3 className="h-card">{e.title}</h3><p className="mt-2 text-muted">{e.text}</p></div>
              </li>
            ))}
          </ol>
        </Block>

        <Block label="Deliverables">
          <p className="mb-6 max-w-2xl text-sm text-muted">Only finished work appears here. Items marked “To be added” are planned deliverables whose files have not been supplied yet.</p>
          <ul className="grid gap-6 md:grid-cols-2">
            {project.deliverables.map((d) => (
              <li key={d.title}>
                {d.status === "ready" && d.image ? (
                  <figure><Image src={d.image.src} alt={d.image.alt} width={d.image.width} height={d.image.height} sizes="(min-width:768px) 45vw, 100vw" className="h-auto w-full border border-line" /><figcaption className="mt-2 text-sm"><strong className="font-medium">{d.title}</strong> · {d.note}</figcaption></figure>
                ) : (
                  <Placeholder title={d.title} need={`${d.note} To be added.`} ratio="aspect-[16/9]" />
                )}
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Tools Used"><p className="font-serif text-2xl">{project.tools.join(" · ")}</p></Block>

        <Block label="Learnings">
          <ul className="max-w-2xl space-y-4 text-lg">
            {project.learnings.map((l) => <li key={l} className="border-l-2 border-accent pl-4">{l}</li>)}
          </ul>
        </Block>
      </Container>

      <section aria-labelledby="more-title" className="border-t border-line bg-alt py-14">
        <Container>
          <h2 id="more-title" className="h-project">More projects</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/projects/${r.slug}`} className="group flex min-h-24 items-center justify-between gap-4 border border-line bg-card p-6 transition-colors hover:border-accent">
                  <span><span className="label block text-muted">{r.type}</span><span className="h-card mt-1 block">{r.title}</span></span>
                  <ArrowUpRight aria-hidden className="size-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
          <nav aria-label="Project navigation" className="mt-8 flex flex-wrap justify-between gap-3 text-sm">
            <Link href={`/projects/${prev.slug}`} className="inline-flex min-h-11 items-center gap-2 hover:text-accent-text"><ArrowLeft aria-hidden className="size-4" />Previous: {prev.shortTitle}</Link>
            <Link href="/#projects" className="inline-flex min-h-11 items-center hover:text-accent-text">Back to Portfolio</Link>
            <Link href={`/projects/${next.slug}`} className="inline-flex min-h-11 items-center gap-2 hover:text-accent-text">Next: {next.shortTitle}<ArrowRight aria-hidden className="size-4" /></Link>
          </nav>
        </Container>
      </section>
    </article>
  );
}
