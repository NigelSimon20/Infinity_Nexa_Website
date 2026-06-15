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
4. **Contact form backend** — the form in `src/components/ContactForm.tsx` currently
   opens the visitor's email client (mailto). For real form submissions, wire it to a
   service like Formspree, Resend, or a Next.js API route (see the comment in that file).
5. **Equity percentages** were intentionally **left off** the public site — they're
   internal info. The team is shown by role/pillar only.

## Deploy

This is a fully static-prerendered Next.js app. Easiest hosts:
- **Vercel** — `vercel` (zero config), or connect the Git repo.
- **Netlify** — connect repo, build command `npm run build`.

---
*Where Business Meets Technology — Harare, Zimbabwe.*
