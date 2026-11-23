import { Bot, Megaphone, PenLine, Search, Share2 } from "lucide-react";
import { identityAreas } from "@/data/skills";
import { Container } from "@/components/ui/Container";

const icons = [Search, Share2, PenLine, Megaphone, Bot];

export function IdentityStrip() {
  return (
    <section aria-labelledby="areas-title" className="bg-lab py-10 text-lab-fg md:py-12">
      <Container className="grid gap-6 lg:grid-cols-[200px_1fr] lg:items-center">
        <h2 id="areas-title" className="label !font-label text-accent">Areas I’m Exploring</h2>
        <ul className="scrollbar-none -mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-lab-line" tabIndex={0} aria-label="Areas of interest">
          {identityAreas.map((a, i) => {
            const Icon = icons[i];
            return (
              <li key={a.title} className="min-w-[210px] snap-start border border-lab-line p-4 sm:min-w-0 lg:border-0 lg:px-5">
                <Icon aria-hidden className="size-5 text-accent" />
                <p className="mt-3 font-medium leading-tight">{a.title}</p>
                <p className="mt-1 text-sm text-lab-muted">{a.text}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
