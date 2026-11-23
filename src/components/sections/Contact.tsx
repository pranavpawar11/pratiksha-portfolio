import { Download, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-alt">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <p className="label mb-4 text-accent-text">Contact</p>
          <h2 id="contact-title" className="h-section">Have an opportunity in mind? Let’s connect.</h2>
          <p className="mt-5 max-w-xl text-muted">I’m looking forward to beginning my professional journey in digital marketing, learning from experienced teams and contributing to meaningful projects.</p>

          <address className="mt-8 space-y-1 not-italic">
            <p translate="no" className="font-serif text-2xl">{siteConfig.name}</p>
            <p className="text-muted">{siteConfig.location}</p>
            <p><a className="inline-flex min-h-11 items-center break-all underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-text" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
            {siteConfig.showPhone && <p><a className="inline-flex min-h-11 items-center gap-2 hover:text-accent-text" href={`tel:+91${siteConfig.phone}`}><Phone aria-hidden className="size-4" />{siteConfig.phone}</a></p>}
          </address>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`mailto:${siteConfig.email}`}><Mail aria-hidden className="size-4" />Email Me</Button>
            <Button href={siteConfig.linkedin} external variant="secondary">LinkedIn</Button>
            <Button href={siteConfig.resumePath} download variant="secondary"><Download aria-hidden className="size-4" />Resume</Button>
            <CopyEmail email={siteConfig.email} className="border border-line hover:bg-sand" />
          </div>
        </div>
        <div>
          <h3 className="label mb-5 text-muted">Or send a message</h3>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
