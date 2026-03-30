# jimbrouwer.co.uk — Claude Code Instructions

> Read this file at the start of every session. It is the single source of truth for this project.

---

## What this project is

Rebuilding jimbrouwer.co.uk as a personal portfolio site for Jim Brouwer — freelance Creative Technologist and Artist Technical Producer based in Nottingham.

**Live reference:** https://jimbrouwer-site.vercel.app (existing Next.js site — we are restyling this, not rebuilding from scratch)
**Target domain:** jimbrouwer.co.uk (currently on Squarespace — DNS migration happens after build is complete)
**GitHub repo:** https://github.com/jimbrouw/jimbrouwer2026website
**Design mockup reference:** jim-brouwer-site-mockup.html (in repo root)

---

## Build strategy

**Option 1 — Restyle the existing Vercel/Next.js site.**

The existing site has the right structure, real project images, and working routes. The job is:
1. Apply the High-End Raw design system (see below) on top of existing components
2. Swap out generic copy for approved copy (see below)
3. Add missing sections: Process, Institution Strip, Availability, Scraps/BTS
4. Add Luke Greenaway-style UX patterns (numbered projects, pre-filled mailto, cookie-free declaration)
5. Wire in new project data from `projects.json`

Do NOT restructure the Next.js app or change routing conventions unless there is a clear reason.

---

## Design system — HIGH-END RAW / DIGITAL ARCHIVE

> **Skill:** Before building any new UI component, page, or section, read the frontend-design skill at `/Users/standard/.claude/skills/designer/SKILL.md` and apply its principles within the constraints of the High-End Raw design system below. The skill's job is to keep the output from looking like generic AI-generated work. The design system below overrides any conflicting defaults in the skill (fonts, colours, grain are already decided — don't reinvent them).

### Typography
- Display: **Playfair Display** — weight 900 for headlines, weight 400 italic for secondary/decorative
- Body/mono: **IBM Plex Mono** — weight 300 for body, weight 400 for labels/tags
- Load both from Google Fonts
- Never use Inter, Roboto, Arial, or system fonts

### Colour palette
```css
:root {
  --charcoal: #1a1917;   /* primary background */
  --paper:    #e8e4dd;   /* primary text */
  --linen:    #c9c3b8;   /* secondary text */
  --burnt:    #c4602a;   /* accent — CTAs, hover states, labels only */
  --muted:    #6b6660;   /* tertiary text, rules */
}
```

### Grain overlay
Apply a subtle SVG noise grain as a fixed `::after` pseudo-element on `body`. Opacity ~0.04, mix-blend-mode: overlay. Kills the flat digital look.

```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E");
  opacity: 0.04;
  mix-blend-mode: overlay;
}
```

### Custom cursor
Small burnt orange dot (8px) that expands to a ring (40px, transparent fill, 1px burnt border) on interactive elements.

### Project grid
- No carousels
- Static grid with hover scale (1.03) on image
- Each project numbered: 001, 002, 003...
- Metadata strip per project: Tag / Year / Institution
- On hover: project title overlays the image with gradient fade

---

## Navigation (locked — do not add items)

```
Work  |  Process  |  About  |  Contact
```

No equipment hire. No blog. No booking contract. Nothing else.

---

## Approved copy

### Hero headline
**I make the impossible idea technically real.**

### Hero sub (right side)
I bridge the gap between half-formed vision and realised installation. 24 years of technical production in the UK arts sector — now working with artists, venues, and commercial clients who need someone who thinks as well as builds.

### Availability strip (top of page, small text)
Available from: June '26 · Nottingham, UK · UK-wide + remote · Quotes within 60 mins

### Tagline strip (below hero fold)
Artist Technical Producer · AV Installation · AI Creative Pipelines · Multichannel Audio · Immersive Experience

### About copy
JIM BROUWER · FREELANCE · NOTTINGHAM

Most technical people can execute your idea. Jim can tell you whether it's the right idea — and then build it anyway.

For 24 years he has worked at the intersection of art and technology, turning half-formed visions into things that exist in physical space. Sixteen of those years were spent as Head of AV/IT at Nottingham Contemporary, where he worked with artists including Jarvis Cocker, Zinzi Minott, Tai Shani, and Daniel Steegmann Mangrané.

He now works as an independent freelance consultant — brought in when the idea is ambitious, the technical brief is unclear, or the person you hired last time didn't quite get it.

His practice spans multichannel audio, projection mapping, AI-generated video pipelines, GPS-triggered audio art, data sonification, and immersive installation. He is also one half of DJ Climate & MC Change — a satirical electronic music project with performances at Sonar Barcelona, Shambhala, and Glade Festival.

### Process steps
1. **Listen** — Before any spec, I need to understand what the work is actually trying to feel like. Most technical problems are creative problems in disguise.
2. **Translate** — I turn half-formed ideas into feasible technical plans — formats, budgets, timelines, kit lists — without flattening the ambition.
3. **Build** — On-site or remote: I manage the technical delivery from first cable run to final calibration, so you can stay in the work.
4. **Document** — The scraps matter. I keep the BTS, the voice notes, the early sketches — because the process is part of the piece.

### Institution credibility strip
Baltic · Liverpool Biennial · Nottingham Contemporary · National Trust · Site Gallery · Talbot Rice Gallery · BACKLIT · Primary · New Art Exchange · Bonington Gallery NTU · Bright Winter Nights · Vent Media · Lindley Productions

### Footer
- Email: info@jimbrouwer.co.uk (pre-filled mailto — see below)
- Also links to: climaterave.com
- Cookie-free declaration (no banner)
- Availability: footer only (not header)
- Day rate: hidden

### Pre-filled mailto link
```
mailto:info@jimbrouwer.co.uk?subject=Project%20Enquiry%20%E2%80%94%20Jim%20Brouwer&body=Hi%20Jim%2C%0A%0AI%27m%20interested%20in%20working%20together.%20Here%27s%20some%20info%3A%0A%0A-%20Project%20idea%20or%20brief%3A%0A%0A-%20Ideal%20timeline%3A%0A%0A-%20Budget%20range%3A%0A%0ALooking%20forward%20to%20hearing%20from%20you.
```

---

## Project data

See `projects.json` in the repo root. This is the single source of truth for all project content. When adding or editing projects, edit `projects.json` — do not hardcode project data in components.

---

## Image sources

**Existing Vercel site images** — already in `/public/images/projects/` — reuse these paths directly:
- `art-tour-app/screen-home.jpg`
- `donald-rodney/hero.jpg`
- `meriem-bennani/hero-010.jpg`
- `mark-leckey-liverpool-biennial/hero.jpg`
- `allan-webber/hero.jpg`
- `abbas-zahedi/hero.jpg`
- `charlotte-johannesson/hero.jpg`
- `aquatopia/hero.jpg`

**Google Drive images** — convert to direct links using:
`https://drive.google.com/uc?export=view&id=FILE_ID`
Extract FILE_ID from a Drive share URL: `drive.google.com/file/d/FILE_ID/view`

**Third-party press images** — do NOT use. Jim must own or have rights to all images on site.

---

## Content decisions (locked)

| Item | Decision |
|---|---|
| Equipment hire pages | Hidden — keep URLs alive, remove from nav |
| NC AV Blog | Remove |
| DJ Climate | Footer link to climaterave.com |
| Day rate | Hidden |
| Availability | Footer only |
| Cookie policy | Cookie-free declaration — no banner |
| Build strategy | Restyle Vercel repo (Option 1) |

---

## What NOT to do

- Do not use carousels anywhere
- Do not use Inter, Roboto, Arial, or system-ui fonts
- Do not use purple gradients or "AI aesthetic" colour schemes
- Do not add nav items beyond Work / Process / About / Contact
- Do not use third-party press images you don't have rights to
- Do not hardcode project data — always use projects.json
- Do not add equipment hire, booking contract, or blog back in

---

## DNS migration (do after build is complete)

Current: jimbrouwer.co.uk → Squarespace
Target: jimbrouwer.co.uk → Vercel

Steps:
1. Add jimbrouwer.co.uk as a custom domain in Vercel dashboard
2. Vercel will give you DNS records (A record + CNAME)
3. Log into Squarespace → Domains → DNS settings
4. Replace Squarespace DNS records with Vercel's
5. Allow up to 48hrs propagation
6. Do NOT cancel Squarespace until DNS has fully propagated and is verified in Vercel

---

## When to invoke the frontend-design skill

The skill lives at `/Users/standard/.claude/skills/designer/SKILL.md`. Read it before starting any of these tasks:

| Task | Why the skill helps |
|---|---|
| Building the Code & Tools filter cards | Stops them looking like SaaS feature boxes |
| Building project detail pages | Ensures editorial layout, not case-study template |
| Adding any new section (Scraps, Chronology, etc.) | Keeps aesthetic coherent, not generic |
| Any new component from scratch | Forces a committed design direction before touching code |

**The skill does NOT override:**
- Font choices (Playfair + IBM Plex Mono — already decided)
- Colour tokens (already in CSS variables — use them)
- Grain overlay (already implemented — don't duplicate)

**The skill DOES help with:**
- Spatial composition and layout decisions — use its "unexpected layouts, asymmetry, overlap" guidance
- Motion and micro-interactions — use its animation principles for hover states and reveals
- Avoiding generic patterns — its explicit ban on Inter/purple gradients/cookie-cutter components applies

---

## Session start checklist

At the start of every Claude Code session:
- [ ] Read this file
- [ ] Read `projects.json`
- [ ] Check git log for recent changes
- [ ] Run `npm run dev` to confirm the site builds before making changes

---

*Last updated: March 2026 · T-Bone Productions*
