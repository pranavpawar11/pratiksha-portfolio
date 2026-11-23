import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LabWorkspace } from "./LabWorkspace";

export function MarketingLab() {
  return (
    <section id="marketing-lab" aria-labelledby="lab-title" className="lab bg-lab py-20 text-lab-fg md:py-28">
      <Container>
        <SectionHeading onDark eyebrow="Marketing Lab" id="lab-title" title="Inside the Marketing Lab."
          intro="A space to explore practical marketing concepts, planning frameworks and simple real-world examples." />
        <LabWorkspace />
      </Container>
    </section>
  );
}
