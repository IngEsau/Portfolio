# Daniel Esaú Negrete Aguilar Portfolio

Premium UX/UI portfolio built as a single-page application with Next.js. The site is designed to present real projects, verified certifications, professional strengths, downloadable CV access, and a bilingual experience in English and Spanish.

## Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- React Icons

## Highlights

- Bilingual interface with persistent `EN / ES` language switch
- Premium dark visual system with editorial typography and glass-inspired surfaces
- Motion system based on reusable Framer Motion variants
- Real project gallery with external links to live work and repositories
- Certifications section with public Platzi verification links
- Downloadable CV served from the app
- Sticky navigation and responsive mobile menu

## Local Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

The app will be available at:

```bash
https://portfolio-rho-lyart-h7gxpbcqx1.vercel.app/
```

Useful scripts:

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    motion/
      Reveal.tsx
      StaggerGroup.tsx
    organisms/
      Footer.tsx
      Navbar.tsx
    providers/
      LanguageProvider.tsx
  lib/
    motion.ts
    translations.ts

public/
  documents/
  patterns/
  social/
```

## Content Areas

- Hero section with editorial quote and highlighted stats
- About section with social links and CV download
- Projects section with real portfolio entries
- Certifications section with verified Platzi credentials
- Skills & Tools section with frontend-focused stack
- Contact section with direct professional contact details

## Notes

- Social icons and decorative pattern assets live in `public/`.
- The CV is served from `public/documents/`.

## Validation

The project is expected to pass:

```bash
npm run lint
npm run build
```
