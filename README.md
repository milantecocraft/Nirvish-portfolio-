# Nirvisha — UX/UI & Web Designer · Portfolio

A modern, professional **dark-theme** single-page portfolio (deep navy + vibrant blue),
with 3D hero shapes, scroll motion, image-based project cards, case-study modals,
and a validated contact form. Built as a **standalone site** — no build tools or Node required.

## Run it

- **Easiest:** double-click `index.html` (needs internet for the Three.js / GSAP / Google Fonts CDNs).
- **Local server (recommended for full desktop view):** the project includes a tiny PowerShell
  static server. From the project folder run:
  ```
  powershell -ExecutionPolicy Bypass -File .claude/serve.ps1 8123
  ```
  then open `http://localhost:8123`.

## Deploy on Vercel

This project is already Vercel-ready because it is a static site with `index.html` at the root.

1. Push this folder to a GitHub repository.
2. In Vercel, choose **New Project** and import that repo.
3. Keep the framework preset as **Other**.
4. Leave the build command empty and use the project root as the output.
5. Click **Deploy**.

If you want, you can also drag and drop the project folder into Vercel for a quick one-off deploy.

## Files

| File | What's in it |
|------|--------------|
| `index.html` | Markup for all sections, SEO meta + Person schema, and the Three.js hero scene |
| `styles.css` | Full design system (dark navy/blue palette, responsive, accessibility) |
| `app.js` | Projects data + cover images, case-study modals, filters, FAQ accordion, counters, form validation, mobile nav |

## Sections

Home (hero + stats + values) · About · Work (filterable, image cards, case-study modals) ·
Services + Process timeline · Testimonials · FAQ · Contact (validated form) · Footer.
*(Pricing section removed by request.)*

## ⚠️ Placeholders to replace

Search the project for these and swap in your real details:

- **`[Your City, Country]`** - appears in the hero badge, contact info, and the JSON-LD schema.
- **Your photo** - the site loads `nirvisha.jpg` from the project root for both the hero and About
  sections. **Save your photo as `nirvisha.jpg`** in this folder and it appears automatically
  (cropped to fit). Until then, a placeholder avatar shows.
- **Project images** - the `IMAGES` map in `app.js` points at royalty-free Unsplash photos
  (with an automatic Lorem Picsum fallback). Replace each URL with your real case-study
  screenshot when ready.
- **Social links** - `linkedin.com/in/nirvisha`, Behance/Twitter `href="#"`. (Email is set
  to `nirvisha.v@gmail.com`.)
- **Years / stats** - `data-count` values on the stat blocks (`20`, `5`, `5.0`, `12`).
- **Projects** - the `PROJECTS` array at the top of `app.js`. The first 5 are your real projects
  (Prega Center, Salon Booking, Prox-E, LDN Collective, Firm Pet) with live Figma/Adobe XD links;
  the remaining 9 are sample projects you can edit or delete. Each project can carry a
  `link` + `linkType` (`Figma` / `Adobe XD`) which renders a button on the card and in the modal.
- **Testimonials** - names, companies, quotes, and metrics in the Testimonials section of `index.html`.

## Contact form

Validation (required fields + email format) is wired and working. To actually **send** messages,
connect a backend: point the form at [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com),
or your own endpoint. Right now a valid submit shows a success message but doesn't deliver email.

## What's implemented from the spec

✓ dark theme · ✓ deep navy/blue palette & Inter type · ✓ mobile-first responsive (375 → 1440+) ·
✓ sticky header + mobile burger menu · ✓ smooth scroll + fade-in animations · ✓ hover lift on
cards/buttons · ✓ minimal 3D hero shapes · ✓ image-based work cards · ✓ case-study detail modals ·
✓ filterable work grid · ✓ FAQ accordion · ✓ contact form validation · ✓ SEO meta + Person schema ·
✓ accessible (semantic HTML, focus styles, alt text, `prefers-reduced-motion`).

## Notes

- The `.claude/` folder (serve.ps1, launch.json) is only for local previewing — not part of the site.
- To rebuild this in **Framer**: use this as the reference design — recreate the sections, palette,
  and interactions in Framer's editor, or keep shipping this coded version (it's faster and fully yours).
