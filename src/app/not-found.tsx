import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Page Not Found | Pratiksha Shelke", robots: { index: false } };

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="label text-accent-text">Error 404</p>
      <h1 className="h-hero mt-4">This page doesn’t exist.</h1>
      <p className="mx-auto mt-5 max-w-md text-muted">The link may be old or mistyped. Head back to the portfolio to see projects and contact details.</p>
      <div className="mt-8 flex justify-center gap-3"><Button href="/">Back to Portfolio</Button><Button href="/#projects" variant="secondary">View Projects</Button></div>
    </Container>
  );
}
