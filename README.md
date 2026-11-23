# Pratiksha Shelke: Digital Marketing Portfolio

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Lucide · React Hook Form + Zod. Server Components by default; client components only for the theme toggle, navbar, skill explorer, Marketing Lab, gallery and contact form.

## Run

```bash
npm install
cp .env.example .env.local   # then edit
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Node 20.9+ required.

## Before you publish (see CONTENT_TODO.md)

1. Set `NEXT_PUBLIC_SITE_URL` to the real domain. Canonical URLs, sitemap, robots and Open Graph all derive from it.
2. Add the portrait: put it in `public/images/` and set `assets.portrait` in `src/lib/constants.ts`.
3. Add real project visuals and gallery designs (see CONTENT_TODO.md).
4. Optional contact form: create a Resend API key and set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. Without it, the form says it is unavailable and the mailto button still works.
5. Phone number visibility: `NEXT_PUBLIC_SHOW_PHONE=false` hides it everywhere.

## Where content lives

| Change | File |
|---|---|
| Name, email, links, portrait | `src/lib/constants.ts` |
| Projects and case studies | `src/data/projects.ts` |
| Skills, strengths, approach | `src/data/skills.ts` |
| Education, certificate, Rajavi Technologies | `src/data/education.ts` |
| Gallery designs | `src/data/gallery.ts` |
| Marketing Lab sample data | `src/data/lab.ts` |
| Resume PDF | `public/documents/pratiksha-resume.pdf` |

Adding a project to `projects.ts` automatically creates its page, sitemap entry, metadata, JSON-LD and social image.

## Theme

`data-theme` on `<html>` is set by an inline script before first paint (stored choice, else system preference), so there is no flash. Colours are CSS variables in `src/app/globals.css`.

## Notes

- Fonts (Playfair Display, Inter, Space Grotesk) are self-hosted from `src/fonts` via `next/font/local`.
- `/projects/social-media-content-strategy` redirects to the Raje Masale case study (same project; see `next.config.ts`).
- `public/llms.txt` summarises the site for AI crawlers.
