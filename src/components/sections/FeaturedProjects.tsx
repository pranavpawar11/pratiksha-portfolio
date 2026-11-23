import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 md:py-28 border-t border-line">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          id="projects-title"
          title="Learning by doing. Exploring through projects."
          intro="Self-initiated and practice projects, each labelled as such. None are paid client work, and no campaign results are claimed."
        />
        <div className="mt-14 space-y-16 md:space-y-20">
          {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} featured={i === 0} />)}
        </div>
      </Container>
    </section>
  );
}
