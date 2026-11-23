"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Check, Download, MapPin, Search, TrendingUp } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const focus = ["SEO", "Social media", "Content strategy", "AI marketing"];

/* ------------------------------------------------------------------ */
/* Styles: 3D background + portrait stage + card motion                */
/* All motion is switched off for visitors who prefer reduced motion. */
/* ------------------------------------------------------------------ */
const css = `
/* ---------- 3D background (unchanged) ---------- */
.h3d-scene{perspective:1100px}
.h3d-floor{position:absolute;left:-25%;right:-25%;bottom:-8%;height:62%;transform-origin:50% 100%;
  transform:rotateX(68deg);
  background-image:linear-gradient(currentColor 1px,transparent 1px),linear-gradient(90deg,currentColor 1px,transparent 1px);
  background-size:56px 56px;animation:h3d-grid 6s linear infinite;
  -webkit-mask-image:linear-gradient(to top,#000 10%,transparent 85%);mask-image:linear-gradient(to top,#000 10%,transparent 85%)}
.h3d-cube{--s:90px;position:absolute;width:var(--s);height:var(--s);transform-style:preserve-3d;
  animation:h3d-spin var(--t,26s) linear infinite}
.h3d-float{position:absolute;animation:h3d-bob var(--b,9s) ease-in-out infinite}
.h3d-face{position:absolute;inset:0;border:1px solid rgb(var(--h3d-edge,0 0 0)/0)}
.h3d-face:nth-child(1){transform:translateZ(calc(var(--s)/2))}
.h3d-face:nth-child(2){transform:rotateY(180deg) translateZ(calc(var(--s)/2))}
.h3d-face:nth-child(3){transform:rotateY(90deg) translateZ(calc(var(--s)/2))}
.h3d-face:nth-child(4){transform:rotateY(-90deg) translateZ(calc(var(--s)/2))}
.h3d-face:nth-child(5){transform:rotateX(90deg) translateZ(calc(var(--s)/2))}
.h3d-face:nth-child(6){transform:rotateX(-90deg) translateZ(calc(var(--s)/2))}
.h3d-ring{position:absolute;border-radius:9999px;transform-style:preserve-3d;animation:h3d-ring 20s linear infinite}

/* ---------- Portrait stage ---------- */
.stage{--px:0;--py:0}
/* each layer moves a different amount with the pointer = real depth */
.depth{transition:transform .35s cubic-bezier(.2,.7,.2,1);will-change:transform}
.depth-back {transform:translate3d(calc(var(--px)*-10px),calc(var(--py)*-8px),0)}
.depth-mid  {transform:translate3d(calc(var(--px)*6px),calc(var(--py)*4px),0)}
.depth-front{transform:translate3d(calc(var(--px)*16px),calc(var(--py)*10px),0)}
.depth-card {transform:translate3d(calc(var(--px)*26px),calc(var(--py)*16px),0)}

/* portrait lifts out of the frame once, on load */
.pop{animation:pop .9s cubic-bezier(.2,.8,.2,1) .15s both}
@keyframes pop{from{opacity:0;transform:translateY(28px) scale(.98)}to{opacity:1;transform:none}}

/* soft idle float for the two info cards (different pace so they never sync) */
.idle-a{animation:idle 7s ease-in-out infinite}
.idle-b{animation:idle 8.5s ease-in-out -3s infinite}
@keyframes idle{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

/* live indicator dot */
.live-dot{position:relative}
.live-dot::after{content:"";position:absolute;inset:0;border-radius:9999px;background:currentColor;
  animation:ping 1.8s cubic-bezier(0,0,.2,1) infinite}
@keyframes ping{75%,100%{transform:scale(2.4);opacity:0}}

/* active day marker */
.day-active{animation:day 1.4s ease-in-out infinite}
@keyframes day{0%,100%{box-shadow:0 0 0 0 rgb(var(--accent-rgb,217 119 87)/.45)}50%{box-shadow:0 0 0 5px rgb(var(--accent-rgb,217 119 87)/0)}}

/* keyword text swap */
.swap{animation:swap .45s ease both}
@keyframes swap{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}

.h3d-tilt{transition:transform .6s cubic-bezier(.2,.7,.2,1)}
@media (min-width:1024px){
  .h3d-tilt{transform:perspective(1400px) rotateY(-5deg) rotateX(1deg)}
  .h3d-tilt:hover{transform:perspective(1400px) rotateY(0) rotateX(0)}
}

@keyframes h3d-spin{from{transform:rotateX(-24deg) rotateY(0)}to{transform:rotateX(-24deg) rotateY(360deg)}}
@keyframes h3d-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-22px)}}
@keyframes h3d-grid{from{background-position:0 0}to{background-position:0 56px}}
@keyframes h3d-ring{from{transform:rotateX(70deg) rotateZ(0)}to{transform:rotateX(70deg) rotateZ(360deg)}}

@media (prefers-reduced-motion:reduce){
  .h3d-floor,.h3d-cube,.h3d-float,.h3d-ring,.idle-a,.idle-b,.live-dot::after,.day-active,.swap,.pop{animation:none}
  .depth,.h3d-tilt{transition:none}
  .depth-back,.depth-mid,.depth-front,.depth-card{transform:none!important}
}
`;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* ------------------------------------------------------------------ */
/* Card 1: SEO. Shows a page climbing search results for a keyword.    */
/* ------------------------------------------------------------------ */
const searches = [
  { q: "buy masala online", title: "Fresh Masala Online | Brand", meta: "Title and meta written to match search intent." },
  { q: "organic spices pune", title: "Organic Spices in Pune | Brand", meta: "Local keywords placed where searchers look first." },
  { q: "homemade masala", title: "Homemade Masala, Delivered | Brand", meta: "Benefit-led copy that earns the click." },
];

function SeoCard({ reduced }: { reduced: boolean }) {
  const [idx, setIdx] = useState(0);
  const [rank, setRank] = useState(reduced ? 1 : 8);

  // Climb from #8 to #1, hold, then move to the next sample keyword.
  useEffect(() => {
    if (reduced) {
      setRank(1);
      return;
    }
    const t = setInterval(() => {
      setRank((r) => {
        if (r > 1) return r - 1;
        // reached #1: hold a beat, then restart with the next keyword
        setTimeout(() => {
          setIdx((i) => (i + 1) % searches.length);
          setRank(8);
        }, 1500);
        return r;
      });
    }, 420);
    return () => clearInterval(t);
  }, [reduced]);

  const s = searches[idx];
  const progress = ((9 - rank) / 8) * 100;

  return (
    <figure
      className="w-56 border border-line bg-card p-3 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.3)]"
      aria-label="Sample SEO result: a page rising to position one in search results"
    >
      <figcaption className="mb-2 flex items-center justify-between text-xs font-medium text-muted">
        <span className="flex items-center gap-1.5">
          <Search aria-hidden className="size-3" />
          SEO in action
        </span>
        <span className="text-[0.65rem] font-normal">sample data</span>
      </figcaption>

      <div className="mb-2 flex items-center gap-1.5 border border-line bg-sand/60 px-2 py-1 text-[0.7rem] text-muted">
        <Search aria-hidden className="size-3 shrink-0" />
        <span key={s.q} className="swap truncate">{s.q}</span>
      </div>

      <div key={s.title} className="swap">
        <p className="text-[0.7rem] leading-snug text-sage-text">yourbrand.com</p>
        <p className="text-sm font-medium leading-tight text-accent-text">{s.title}</p>
        <p className="text-[0.7rem] leading-snug text-muted">{s.meta}</p>
      </div>

      <div className="mt-3">
        <div className="mb-1 flex items-center justify-between text-[0.7rem]">
          <span className="flex items-center gap-1 text-muted">
            <TrendingUp aria-hidden className="size-3" />
            Search position
          </span>
          <span className="font-semibold tabular-nums text-accent-text" aria-live="off">#{rank}</span>
        </div>
        <div className="h-1.5 w-full bg-sand">
          <div className="h-full bg-accent transition-[width] duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Card 2: Social media / content strategy. A weekly plan that runs.   */
/* ------------------------------------------------------------------ */
const plan = [
  { d: "M", full: "Monday", post: "Reel", idea: "Behind the scenes" },
  { d: "T", full: "Tuesday" },
  { d: "W", full: "Wednesday", post: "Carousel", idea: "3 tips that convert" },
  { d: "T", full: "Thursday" },
  { d: "F", full: "Friday", post: "Blog post", idea: "Search-led article" },
  { d: "S", full: "Saturday" },
  { d: "S", full: "Sunday", post: "Story", idea: "Audience poll" },
];
const postDays = plan.map((p, i) => (p.post ? i : -1)).filter((i) => i >= 0);

function PlanCard({ reduced, paused }: { reduced: boolean; paused: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced || paused) return;
    const t = setInterval(() => {
      setActive((a) => {
        const pos = postDays.indexOf(a);
        return postDays[(pos + 1) % postDays.length];
      });
    }, 2200);
    return () => clearInterval(t);
  }, [reduced, paused]);

  const current = plan[active];

  return (
    <figure
      className="w-48 border border-line bg-card p-3 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.3)]"
      aria-label="Sample weekly content plan with posts on Monday, Wednesday, Friday and Sunday"
    >
      <figcaption className="mb-2 flex items-center justify-between text-xs font-medium text-muted">
        <span>Content plan</span>
        <span className="flex items-center gap-1.5 text-[0.65rem] font-normal text-accent-text">
          <span className="live-dot size-1.5 rounded-full bg-accent text-accent" aria-hidden />
          this week
        </span>
      </figcaption>

      <div className="flex gap-1" aria-hidden>
        {plan.map((p, i) => {
          const isPost = !!p.post;
          const isActive = i === active;
          const done = isPost && postDays.indexOf(i) < postDays.indexOf(active);
          return (
            <span
              key={i}
              className={[
                "flex size-6 items-center justify-center text-[0.6rem] font-medium transition-colors duration-300",
                isActive ? "day-active bg-accent text-on-accent" : done ? "bg-accent/40 text-on-accent" : isPost ? "bg-sand text-ink" : "bg-sand/60 text-muted",
              ].join(" ")}
            >
              {done ? <Check className="size-3" /> : p.d}
            </span>
          );
        })}
      </div>

      <div key={active} className="swap mt-3 border-t border-line pt-2">
        <p className="text-[0.7rem] text-muted">{current.full}</p>
        <p className="text-sm font-medium leading-tight">
          {current.post}: <span className="font-normal text-muted">{current.idea}</span>
        </p>
      </div>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Background (unchanged)                                              */
/* ------------------------------------------------------------------ */
function Cube({ className, size, duration, bob }: { className: string; size: number; duration: string; bob: string }) {
  return (
    <div className={`h3d-float ${className}`} style={{ ["--b" as string]: bob }}>
      <div className="h3d-cube" style={{ ["--s" as string]: `${size}px`, ["--t" as string]: duration }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="h3d-face border-accent/50 bg-accent/[0.07]" />
        ))}
      </div>
    </div>
  );
}

function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-sand blur-3xl" />
      <div className="h3d-scene absolute inset-0">
        <div className="h3d-floor text-line opacity-70" />
      </div>
      <div className="h3d-scene absolute inset-0">
        <Cube className="left-[6%] top-[14%] hidden sm:block" size={84} duration="28s" bob="9s" />
        <Cube className="left-[44%] top-[6%] hidden lg:block" size={46} duration="22s" bob="7s" />
        <Cube className="bottom-[10%] right-[3%] hidden md:block" size={110} duration="34s" bob="11s" />
        <Cube className="bottom-[22%] left-[40%] hidden xl:block" size={38} duration="18s" bob="8s" />
        <div className="absolute right-[8%] top-[8%] hidden md:block" style={{ transformStyle: "preserve-3d" }}>
          <div className="h3d-ring h-40 w-40 border-2 border-accent/30" />
          <div className="h3d-ring absolute left-6 top-6 h-28 w-28 border border-line" style={{ animationDirection: "reverse" }} />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export function Hero() {
  const { portrait, portraitCutout, portraitWidth, portraitHeight } = siteConfig.assets as {
    portrait?: string;
    portraitCutout?: string;
    portraitWidth: number;
    portraitHeight: number;
  };
  // Use the background-removed image when available, otherwise fall back to the framed photo.
  const cutout = portraitCutout;
  const reduced = usePrefersReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  // Gentle pointer parallax (mouse only, off for reduced motion)
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== "mouse" || !stageRef.current) return;
    const r = stageRef.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    stageRef.current.style.setProperty("--px", x.toFixed(3));
    stageRef.current.style.setProperty("--py", y.toFixed(3));
  };
  const onLeave = () => {
    setHovering(false);
    stageRef.current?.style.setProperty("--px", "0");
    stageRef.current?.style.setProperty("--py", "0");
  };

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Background />

      <Container className="relative z-10 grid items-center gap-10 pb-14 pt-10 md:pb-20 lg:grid-cols-[1.35fr_1fr] lg:gap-14 lg:pt-16">
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

          <ul className="rise rise-3 mt-5 flex flex-wrap gap-2" aria-label="Areas of focus">
            {focus.map((f) => (
              <li key={f} className="border border-line bg-card/80 px-3 py-1 text-sm backdrop-blur-sm">{f}</li>
            ))}
          </ul>

          <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects" className="w-full sm:w-auto"><ArrowDown aria-hidden className="size-4" />Explore My Work</Button>
            <Button href={siteConfig.resumePath} download variant="secondary" className="w-full sm:w-auto"><Download aria-hidden className="size-4" />Download Resume</Button>
          </div>
          <p className="rise rise-4 mt-6 flex items-center gap-2 text-sm text-muted"><MapPin aria-hidden className="size-4 text-accent-text" />{siteConfig.location}</p>
        </div>

        {/* ---------------- Portrait stage ---------------- */}
        <div className="relative mx-auto w-full max-w-[420px] pb-12 lg:max-w-none">
          <div
            ref={stageRef}
            onPointerMove={onMove}
            onPointerEnter={() => setHovering(true)}
            onPointerLeave={onLeave}
            className="stage h3d-tilt relative"
          >
            {cutout ? (
              /* ===== Cutout layout: she stands in front of the frame, head breaks out of the top ===== */
              <div className="relative mx-auto" style={{ aspectRatio: "1 / 1.12" }}>
                {/* back: offset accent block */}
                <div className="depth depth-back absolute inset-x-[6%] bottom-0 top-[16%]" aria-hidden>
                  <div className="absolute -right-4 top-5 h-full w-full bg-accent/90 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] sm:-right-6" />
                  {/* mid: sand frame */}
                  <div className="grain absolute inset-0 bg-sand shadow-[0_24px_50px_-18px_rgba(0,0,0,0.3)]" />
                </div>

                {/* front: cutout portrait, clipped at the bottom edge only so the head can rise above the frame */}
                <div className="depth depth-front pop absolute inset-x-0 bottom-0 top-0" style={{ clipPath: "inset(-12% -10% 0 -10%)" }}>
                  <Image
                    src={cutout}
                    alt="Portrait of Pratiksha Shelke, aspiring digital marketing professional"
                    width={portraitWidth}
                    height={portraitHeight}
                    priority
                    sizes="(min-width:1024px) 440px, 90vw"
                    className="absolute bottom-0 left-1/2 h-auto w-[104%] max-w-none -translate-x-1/2 drop-shadow-[0_22px_28px_rgba(0,0,0,0.28)]"
                  />
                </div>
              </div>
            ) : portrait ? (
              /* ===== Fallback: original framed photo ===== */
              <div className="relative">
                <div aria-hidden className="absolute -right-3 top-6 h-[88%] w-[88%] bg-accent/90 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] sm:-right-5" />
                <div className="relative overflow-hidden bg-sand shadow-[0_24px_50px_-18px_rgba(0,0,0,0.3)]" style={{ aspectRatio: `${portraitWidth} / ${portraitHeight}` }}>
                  <Image src={portrait} alt="Portrait of Pratiksha Shelke, aspiring digital marketing professional" width={portraitWidth} height={portraitHeight} priority sizes="(min-width:1024px) 440px, 90vw" className="h-full w-full object-cover" />
                </div>
              </div>
            ) : (
              <div role="img" aria-label="Portrait placeholder" className="grain flex aspect-[4/5] flex-col items-center justify-center gap-3 bg-sand p-6 text-center">
                <span translate="no" className="font-serif text-7xl font-semibold">PS<span className="text-accent">.</span></span>
                <span className="label text-accent-text">Portrait to be added</span>
              </div>
            )}

            {/* ---------------- Working cards ---------------- */}
            {/* SEO card: lower left, never over the face */}
            <div className="depth depth-card absolute -left-2 bottom-0 hidden sm:block md:-left-8">
              <div className="idle-a">
                <SeoCard reduced={reduced} />
              </div>
            </div>

            {/* Content plan card: lower right, pauses while the pointer is over the stage */}
            <div className="depth depth-card absolute -right-1 bottom-3 sm:-right-6">
              <div className="idle-b">
                <PlanCard reduced={reduced} paused={hovering} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}