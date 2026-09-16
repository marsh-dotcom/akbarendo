# Project Guide

## Overview

This is a single-page personal website for a fictional endocrinologist. It uses TanStack Start with file-based routing and deploys to Netlify. The design is intentionally editorial and clinical, using warm paper colors, serif display type, compact mono labels, asymmetrical layouts, and abstract endocrine-system graphics built entirely with CSS and inline SVG.

## Architecture

- `src/routes/index.tsx` — Main page and all visible content sections.
- `src/routes/__root.tsx` — HTML shell, SEO metadata, and external font declarations.
- `src/styles.css` — Global design tokens, layouts, responsive behavior, and motion.
- `src/router.tsx` — TanStack Router initialization.
- `src/components/ui/` — Starter UI primitives retained for future expansion but not used by the landing page.
- `content/` and `content-collections.ts` — Starter content infrastructure retained for future educational articles.
- `public/` — Static assets.
- `netlify.toml` — Netlify build and deployment configuration.

## Conventions

- Use TypeScript and functional React components.
- Keep page sections semantic and preserve accessible heading order.
- Use CSS variables in `src/styles.css` for all palette changes.
- Use `Newsreader` for expressive display type, `Manrope` for body copy, and `DM Mono` for clinical labels.
- Prefer CSS and inline SVG for decorative visuals to avoid brittle external image dependencies.
- Animate only `transform` and `opacity`, and maintain the reduced-motion override.
- Keep breakpoints aligned with the existing `1050px` and `760px` responsive thresholds.

## Content Notes

Dr. Maya Laurent and all practice details are fictional. Update the name, credentials, location, email address, and legal language before adapting the site for a real clinician. The consultation action currently uses a `mailto:` link rather than a patient intake form and must not be used to collect protected health information.

## Commands

- `pnpm dev` — Start the Vite development server.
- `pnpm build` — Create a production build.
- `netlify dev --port 8889` — Run through the Netlify local environment.
