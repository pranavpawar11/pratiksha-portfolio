# Content still to supply

The site never invents content. Anything below is shown as a clearly labelled placeholder until you provide it.

| Item | Where it appears | How to add |
|---|---|---|
| Portrait photo | Hero | Save to `public/images/`, set `assets.portrait` in `src/lib/constants.ts` |
| Raje Masale deliverables: brand strategy snapshot, 5 Canva post designs, content calendar, captions and hashtags, keyword preview | Raje Masale case study | Add images to `public/images/projects/`, then set `status: "ready"` and `image` on the deliverable in `src/data/projects.ts` |
| SEO audit deliverables: keyword spreadsheet, sample audit, on-page recommendations | SEO case study | Same as above |
| Original designs | Creative Gallery | Add to `src/data/gallery.ts` (example in the file). Only your own work. |
| Other course names | Learning Journey | Add verified names only |
| Production domain | Canonical, sitemap, OG | `NEXT_PUBLIC_SITE_URL` |
| Raje Masale tools | Case study | Only Canva and ChatGPT are listed. Add Google Keyword Planner / Meta Ads Manager in `projects.ts` only if you genuinely used them |

## Decision to confirm: Project 03

"Social Media Content Strategy" focused on the same food and spice brand and your resume lists Instagram/Facebook content planning inside Raje Masale, so it is merged into that case study rather than shown as duplicate work. If it is a separate piece of work, add a third entry to `src/data/projects.ts` and remove the redirect in `next.config.ts`.
