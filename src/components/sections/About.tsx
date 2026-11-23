import { strengths } from "@/data/skills";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          id="about-title"
          title="More than just marketing, I’m a curious learner who loves to build meaningful brand stories."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="space-y-5 text-lg">
            <p>Hello! I’m Pratiksha Shelke, a Computer Engineering graduate with a growing interest in digital marketing.</p>
            <p className="text-muted">I enjoy exploring how businesses use digital platforms to reach their target audiences, build brand awareness, generate leads and increase customer engagement.</p>
            <p className="text-muted">My technical background has helped me develop structured thinking and analytical problem-solving skills. Through digital marketing learning and practical projects, I am exploring how creativity, technology and strategy work together.</p>
            <p className="label border-l-2 border-accent pl-4 text-muted">Currently seeking entry-level digital marketing opportunities in {siteConfig.location.split(",")[0]} and beyond.</p>
          </div>
          <div>
            <h3 className="label mb-5 text-accent-text !font-label !tracking-[0.14em]">What I bring</h3>
            <ul className="divide-y divide-line border-y border-line">
              {strengths.map((s) => (
                <li key={s.title} className="grid gap-1 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
                  <span className="font-serif text-xl">{s.title}</span>
                  <span className="text-sm text-muted">{s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
