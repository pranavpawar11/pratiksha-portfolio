import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { certificate, education, technicalExperience } from "@/data/education";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function LearningJourney() {
  return (
    <section id="learning" aria-labelledby="learning-title" className="bg-alt py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Learning Journey" id="learning-title" title="Always learning. Always exploring." />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <h3 className="label mb-5 text-accent-text !font-label">Certification</h3>
            <figure>
              <Image src={certificate.image} alt={`Udemy certificate of completion for ${certificate.course}, awarded to Pratiksha Shelke on ${certificate.completed}`} width={certificate.imageWidth} height={certificate.imageHeight} sizes="(min-width:1024px) 640px, 100vw" className="h-auto w-full border border-line" />
              <figcaption className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="h-card flex items-start gap-2"><BadgeCheck aria-hidden className="mt-1 size-5 shrink-0 text-accent-text" />{certificate.course}</p>
                  <p className="mt-2 text-sm text-muted">{certificate.platform} · Completed <time dateTime={certificate.completedISO}>{certificate.completed}</time> · {certificate.duration}</p>
                  <p className="mt-1 text-sm text-muted">Instructors: {certificate.instructors.join(", ")}</p>
                  <p className="mt-1 break-all text-xs text-muted">Certificate no. {certificate.number} · Reference {certificate.reference}</p>
                </div>
                <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center gap-1 self-start rounded-full border border-fg/70 px-5 text-sm font-medium transition-colors hover:bg-fg hover:text-bg">
                  View Certificate<ArrowUpRight aria-hidden className="size-4" /><span className="sr-only"> (opens Udemy verification in a new tab)</span>
                </a>
              </figcaption>
            </figure>
            {/* <p className="mt-8 max-w-xl text-sm text-muted">
              This course is one part of my learning. I have also explored digital marketing through other courses, YouTube tutorials and self-study, and I add verified course names here as I finish them.
            </p> */}
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="label mb-5 text-accent-text !font-label">Education</h3>
              <ol className="space-y-7 border-l-2 border-line pl-6">
                {education.map((e) => (
                  <li key={e.degree} className="relative">
                    <span aria-hidden className="absolute -left-[29px] top-2 size-2.5 rounded-full bg-accent" />
                    <p className="label tabular text-muted">{e.year} · {e.score}</p>
                    <p className="h-card mt-1">{e.degree}</p>
                    <p className="mt-1 text-sm text-muted">{e.institution}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="label mb-5 text-accent-text !font-label">Additional Technical Experience</h3>
              <Badge tone="outline" className="mb-3">Technical training, not marketing experience</Badge>
              <p className="h-card">{technicalExperience.org}</p>
              <p className="text-sm text-muted">{technicalExperience.role}</p>
              <ul className="mt-3 space-y-1 text-sm">
                {technicalExperience.points.map((p) => <li key={p} className="flex gap-2"><span aria-hidden className="mt-2 size-1 shrink-0 bg-accent" />{p}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
