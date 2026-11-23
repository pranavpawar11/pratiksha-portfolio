import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 select-none";
const variants: Record<Variant, string> = {
  primary: "bg-accent text-on-accent hover:bg-fg hover:text-bg",
  secondary: "border border-fg/70 text-fg hover:bg-fg hover:text-bg",
  ghost: "px-1 text-fg underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-text",
  onDark: "border border-lab-fg/60 text-lab-fg hover:bg-lab-fg hover:text-lab",
};

type LinkProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  href: string;
  external?: boolean;
  download?: boolean;
};

export function Button({ variant = "primary", className, children, href, external, download }: LinkProps) {
  const cls = cn(base, variants[variant], className);
  if (external || download || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...(download ? { download: true } : {})}>
        {children}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return <Link href={href} className={cls}>{children}</Link>;
}
