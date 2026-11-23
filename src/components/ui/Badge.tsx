import { cn } from "@/lib/utils";

export function Badge({ children, tone = "sand", className }: { children: React.ReactNode; tone?: "sand" | "sage" | "accent" | "outline"; className?: string }) {
  const tones = {
    sand: "bg-sand text-fg",
    sage: "bg-sage/40 text-fg",
    accent: "bg-accent text-on-accent",
    outline: "border border-line text-muted",
  };
  return <span className={cn("label inline-flex items-center rounded-full px-3 py-1.5", tones[tone], className)}>{children}</span>;
}
