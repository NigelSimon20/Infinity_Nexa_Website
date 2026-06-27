# Infinity Nexa — Business & IT Services Website

A multi-page corporate website for **Infinity Nexa Business & IT Services (Pvt) Ltd**,
combining the strongest sections of the three TopTech demo templates into one cohesive
site. Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.

## Run it

```bash
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Pages

| Route        | Contents |
|--------------|----------|
| `/`          | Hero, two pillars, popular services, why-us, stats, 5-step process, FAQ |
| `/services`  | Full catalogue — Pillar A (Finance/ZIMRA) + Pillar B (IT/Digital) with USD pricing |
| `/packages`  | The 4 retainer packages, payment & terms, FAQ |
| `/about`     | Who we are, values, the 6 directors, why choose us |
| `/contact`   | Contact form, details, office hours, next-steps |

## Where everything lives

- **All text, services, prices, team, packages, FAQs:** `src/lib/data.ts`
  — edit this one file to update content site-wide.
- **Brand colours & fonts:** `src/app/globals.css` (`@theme` block).
- **Components:** `src/components/` (Header, Footer, Logo, ServiceCard, etc.).

## ⚠️ Placeholders to update before going live

1. **Your real logo** — the mark is currently a clean SVG recreation in
   `src/components/Logo.tsx`. To use your PNG instead: drop it in `public/logo.png`
   and replace `<InfinityMark .../>` with
   `<Image src="/logo.png" alt="Infinity Nexa" width={140} height={40} />`.
2. **WhatsApp number** — `company.whatsapp` in `src/lib/data.ts` (currently a placeholder).
3. **Social media links** — the `href="#"` links in `src/components/Footer.tsx`.
4. **Contact form (Resend)** — the form POSTs to `/api/contact`
   (`src/app/api/contact/route.ts`), which emails you via [Resend](https://resend.com).
   Copy `.env.example` to `.env.local`, add your `RESEND_API_KEY`, and set the same
   vars in your host for production. Verify your domain in Resend, then switch
   `CONTACT_FROM_EMAIL` to a `@infinitynexa.co.zw` address. Until configured, the
   endpoint returns a graceful "not configured" message. Includes a honeypot to
   block spam bots; the visitor's email is set as `reply-to` so you can reply directly.
5. **Equity percentages** were intentionally **left off** the public site — they're
   internal info. The team is shown by role/pillar only.

## SEO & performance (built in)

- **Metadata** — unique title/description + canonical URL per page, Open Graph &
  Twitter cards, `metadataBase`, keywords, robots directives. Edit defaults in
  `src/app/layout.tsx`.
- **Structured data (JSON-LD)** — `ProfessionalService` (name, address, area served,
  social profiles) site-wide + `FAQPage` on the home page (eligible for FAQ rich
  results). See `src/components/JsonLd.tsx`.
- **`robots.txt`, `sitemap.xml`, `manifest.webmanifest`** — generated from
  `src/app/robots.ts`, `sitemap.ts`, `manifest.ts`.
- **Social share image** — `src/app/opengraph-image.png` + `twitter-image.png`
  (1200×630, regenerate by re-running the build script if branding changes).
- **Favicon / app icons** — `icon.png`, `favicon.ico`, `apple-icon.png` in `src/app`.
- **Fonts self-hosted** — Chillax woff2 files in `src/app/fonts` via
  `next/font/local` (no third-party request); Nunito Sans fallback via `next/font`.
- **Performance** — all pages statically prerendered, AVIF/WebP images via
  `next/image`, `optimizePackageImports` for tree-shaken icons, security headers,
  `poweredByHeader` off. See `next.config.ts`.

### ⚠️ Before you deploy — set your real domain

The canonical/OG/sitemap URLs use `https://www.infinitynexa.co.zw`. If that's correct,
you're set. Otherwise update `SITE_URL` in `src/app/layout.tsx`, `sitemap.ts`,
`robots.ts`. After deploying, submit `sitemap.xml` in Google Search Console.

## Deploy

This is a fully static-prerendered Next.js app. Easiest hosts:
- **Vercel** — `vercel` (zero config), or connect the Git repo. Security headers and
  image optimization work out of the box.
- **Netlify** — connect repo, build command `npm run build`.

Production build: `npm run build` then `npm run start` (verified clean — lint passes,
all routes prerender static).

---
*Where Business Meets Technology — Harare, Zimbabwe.*
