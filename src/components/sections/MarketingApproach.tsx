import { approachStages } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MarketingApproach() {
  return (
    <section aria-labelledby="approach-title" className="bg-alt py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="My Approach to Marketing"
          id="approach-title"
          title="How I think about marketing."
          intro="The way I structure my learning and practice projects. It is a working method, not a record of managing professional campaigns."
        />
        <ol className="relative mt-14 grid gap-0 md:grid-cols-4 md:gap-6">
          {approachStages.map((s, i) => (
            <li key={s.title} className="relative border-l-2 border-line pb-10 pl-7 last:pb-0 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-7">
              <span aria-hidden className="absolute -left-[7px] top-1 size-3 rounded-full bg-accent md:-top-[7px] md:left-0" />
              <p className="label tabular text-accent-text">Step {i + 1}</p>
              <h3 className="h-card mt-2">{s.title}</h3>
              <p className="mt-3 text-sm text-muted">{s.text}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2"><span aria-hidden className="mt-2 size-1 shrink-0 bg-accent" />{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
