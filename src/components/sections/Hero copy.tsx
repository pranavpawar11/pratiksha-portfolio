import Image from "next/image";
import { ArrowDown, Download, MapPin, Search } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const week = [
  { d: "M", on: true }, { d: "T", on: false }, { d: "W", on: true }, { d: "T", on: false },
  { d: "F", on: true }, { d: "S", on: false }, { d: "S", on: true },
];

export function Hero() {
  const { portrait, portraitWidth, portraitHeight } = siteConfig.assets;
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <Container className="grid items-center gap-10 pb-14 pt-10 md:pb-20 lg:grid-cols-[1.35fr_1fr] lg:gap-14 lg:pt-16">
        <div>
          <p className="label rise text-accent-text">Hello, I’m Pratiksha Shelke</p>
          <h1 id="hero-title" className="h-hero rise rise-2 mt-5">
            Ideas deserve to become <em className="ink-underline pb-1 font-normal italic">meaningful</em> experiences.
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-lg font-medium">
            Aspiring Digital Marketing Professional exploring SEO, social media, content strategy and AI-powered marketing.
          </p>
          <p className="rise rise-3 mt-3 max-w-xl text-muted">
            I enjoy exploring how brands connect with their audiences through creative content, digital platforms and thoughtful marketing strategies.
          </p>
          <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects" className="w-full sm:w-auto"><ArrowDown aria-hidden className="size-4" />Explore My Work</Button>
            <Button href={siteConfig.resumePath} download variant="secondary" className="w-full sm:w-auto"><Download aria-hidden className="size-4" />Download Resume</Button>
          </div>
          <p className="rise rise-4 mt-6 flex items-center gap-2 text-sm text-muted"><MapPin aria-hidden className="size-4 text-accent-text" />{siteConfig.location}</p>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] pb-10 lg:max-w-none">
          <div aria-hidden className="absolute -right-3 top-6 h-[88%] w-[88%] bg-accent/90 sm:-right-5" />
          <div className="relative overflow-hidden bg-sand" style={{ aspectRatio: `${portraitWidth} / ${portraitHeight}` }}>
            {portrait ? (
              <Image src={portrait} alt="Portrait of Pratiksha Shelke, aspiring digital marketing professional" width={portraitWidth} height={portraitHeight} priority sizes="(min-width:1024px) 440px, 90vw" className="h-full w-full object-cover" />
            ) : (
              <div role="img" aria-label="Portrait placeholder: professional portrait of Pratiksha Shelke to be added" className="grain flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                <span translate="no" className="font-serif text-7xl font-semibold">PS<span className="text-accent">.</span></span>
                <span className="label text-accent-text">Portrait to be added</span>
                <span className="max-w-[16rem] text-sm text-muted">Place the portrait in <code>/public/images</code> and set <code>assets.portrait</code> in <code>src/lib/constants.ts</code>.</span>
              </div>
            )}
          </div>

          {/* Small illustrative previews, kept to the lower edge so they never cover the face */}
          <figure className="absolute -left-2 bottom-0 hidden w-52 border border-line bg-card p-3 sm:block md:-left-6">
            <figcaption className="label mb-1.5 flex items-center gap-1.5 text-muted"><Search aria-hidden className="size-3" />Search snippet · illustrative</figcaption>
            <p className="text-[0.7rem] leading-snug text-sage-text">yourbrand.com</p>
            <p className="text-sm font-medium leading-tight text-accent-text">Fresh Masala Online | Brand</p>
            <p className="text-[0.7rem] leading-snug text-muted">Title and meta description written to match search intent.</p>
          </figure>
          <figure className="absolute -right-1 bottom-2 w-40 border border-line bg-card p-3 sm:-right-5">
            <figcaption className="label mb-2 text-muted">Weekly plan · sample</figcaption>
            <div className="flex gap-1" role="img" aria-label="Sample content calendar: posts on Monday, Wednesday, Friday and Sunday">
              {week.map((w, i) => (
                <span key={i} aria-hidden className={`flex size-5 items-center justify-center text-[0.6rem] font-medium ${w.on ? "bg-accent text-on-accent" : "bg-sand text-muted"}`}>{w.d}</span>
              ))}
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
}
