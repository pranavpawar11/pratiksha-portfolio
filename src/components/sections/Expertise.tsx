import { skillCategories, toolsStrip } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillExplorer } from "./SkillExplorer";

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Expertise"
          id="expertise-title"
          title="Explore my capabilities."
          intro="Skills I have studied and practised through coursework and projects. Pick a category to see what sits inside it."
        />
        <SkillExplorer categories={skillCategories} />
        <div className="mt-14 border-t border-line pt-6">
          <h3 className="label mb-4 text-muted">Tools I use and explore</h3>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 font-serif text-xl">
            {toolsStrip.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </Container>
    </section>
  );
}
