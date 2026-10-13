# CLAUDE.md — Artist Portfolio Website

## Project overview
A portfolio website for a painter and illustrator. The site has two goals:
1. **Show the artwork** (painting and illustration; starting with ~10 pieces, and more will be added over time)
2. **Get commission inquiries.** The Commissions page is the most important page for this.

## Design direction
**Mood:** minimal and calm, with a light touch of playfulness. Think "sketchbook gallery": warm, airy, and quiet, with small hand-drawn details.

**Core principle:** the artwork is the star. The design should never compete with it. Use neutral colors, generous whitespace, and minimal decoration.

### Colors
| Role | Value | Notes |
|---|---|---|
| Background | `#FAF7F2` | Warm paper cream, not pure white |
| Text | `#2B2B2B` | Soft charcoal, not pure black |
| Accent | TBD | One color pulled from the artwork (e.g., terracotta, sage, or dusty blue). Use for buttons, links, and highlights only |

### Typography
- **Headings:** a friendly serif or soft rounded font
- **Body:** a simple, readable sans-serif
- **Logo (optional):** the artist's signature or a handwritten font, used for the logo only

### Playful touches (use sparingly)
- A doodle or small illustration by the artist beside the name and on the About page
- Gentle hover effects: artwork lifts slightly or tilts about 1 degree, like paper on a table
- Hand-drawn underline or arrow on key phrases (e.g., "Commissions open!")
- A small character from the artist's work on the Contact and 404 pages

## Site structure
Navigation: **Work · Commissions · About · Contact**, plus a "Commission me" button in the accent color, always visible in the top corner.

### Home / Work
- Artist name and a one-line intro
- Masonry grid of all pieces, keeping each piece's original proportions (no cropping)
- One page for all the work; the grid should handle any number of pieces (no fixed count anywhere)

### Artwork view
- Clicking a piece opens a large lightbox
- Shows title, medium, size, year, and an optional short story about the piece

### Commissions (highest priority page)
- Status: Open / Closed / "X slots left"
- Commission types with starting prices
- Process steps: Inquire → Sketch → Revisions → Final
- Turnaround time
- What the artist will and won't draw
- A clear inquiry form or button

### About
- Photo of the artist or their workspace
- Short, friendly bio and optional artist statement

### Contact
- Email and social links (Instagram is especially important)

## Guidelines for building
- Keep layouts simple and spacious. When in doubt, remove rather than add.
- Must work well on mobile; most visitors will arrive from Instagram on a phone.
- Optimize images for fast loading, but keep enough resolution to show detail.
- Add descriptive alt text to every artwork image.
- Keep the playful details small so the overall feel stays calm.

## Open questions
- [x] Artist / brand name: **tomo_corn**
- [x] Accent color: **dusty blue** `#6F8BA4` (use `#557189` for text/buttons to meet contrast)
- [x] Paintings vs illustrations: **one combined grid with filter chips** (All / Paintings / Illustrations)
- [ ] Commission types and prices (placeholders in `data/site.ts`)
- [x] Tech stack: **Next.js (App Router, TypeScript)**; hosting TBD (Vercel is the natural fit)

## Where things live
- `data/artworks.ts`: every artwork (image path, title, medium, size, year, alt text, story). Add as many as you like; pixel sizes are read from the image files automatically (`data/getArtworks.ts`)
- `data/site.ts`: name, email, socials, commission status/slots/prices/process/will-won't draw
- `public/art/`: artwork images (currently generated placeholders from `npm run placeholders`)
- `components/Doodles.tsx`: corn mascot + hand-drawn underline (swap for the artist's real doodles)