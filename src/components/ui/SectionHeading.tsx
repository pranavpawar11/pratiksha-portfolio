import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow, title, intro, id, className, onDark,
}: { eyebrow: string; title: React.ReactNode; intro?: string; id?: string; className?: string; onDark?: boolean }) {
  return (
    <header className={cn("max-w", className)}>
      <p className={cn("label mb-4", onDark ? "text-accent" : "text-accent-text")}>{eyebrow}</p>
      <h2 id={id} className="h-section">{title}</h2>
      {intro && <p className={cn("mt-5 max-w-2xl", onDark ? "text-lab-muted" : "text-muted")}>{intro}</p>}
    </header>
  );
}
