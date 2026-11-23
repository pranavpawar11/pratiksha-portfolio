import { cn } from "@/lib/utils";

/** Explicit, honest stand-in for an asset that still has to be supplied. */
export function Placeholder({ title, need, className, ratio = "aspect-[4/3]" }: { title: string; need: string; className?: string; ratio?: string }) {
  return (
    <div
      role="img"
      aria-label={`${title}. Asset to be supplied: ${need}`}
      className={cn("grain flex w-full flex-col items-start justify-end gap-1 border border-dashed border-muted/60 bg-sand/60 p-5", ratio, className)}
    >
      <span className="label text-accent-text">Asset needed</span>
      <span className="font-serif text-lg leading-tight">{title}</span>
      <span className="text-sm text-muted">{need}</span>
    </div>
  );
}
