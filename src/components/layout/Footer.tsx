import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line bg-alt py-12">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p translate="no" className="font-serif text-3xl font-semibold">PS<span className="text-accent">.</span></p>
          <p translate="no" className="mt-2 text-sm font-medium">{siteConfig.name}</p>
          <p className="label mt-1 text-muted">{siteConfig.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}><Link className="inline-flex min-h-11 items-center hover:text-accent-text" href={`/#${l.id}`}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-1 text-sm">
          <li><a className="inline-flex min-h-11 items-center break-all hover:text-accent-text" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
          <li><a className="inline-flex min-h-11 items-center hover:text-accent-text" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></li>
          <li><a className="inline-flex min-h-11 items-center hover:text-accent-text" href="#main">Back to Top</a></li>
        </ul>
      </Container>
      <Container className="mt-10 border-t border-line pt-6 text-sm text-muted">
        <p>© 2026 {siteConfig.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
