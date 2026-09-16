# Dr. Ayesha Akbar — Personal Website

A polished personal website for a fictional board-certified endocrinologist. The site presents Dr. Laurent's areas of expertise, care philosophy, training, and consultation information in a calm editorial design.

## Technology

- React 19 with TypeScript
- TanStack Start and TanStack Router
- Tailwind CSS 4 with a custom global design system
- Lucide React icons
- Netlify deployment integration

## Local Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The application runs at `http://localhost:3000` by default. For Netlify's local runtime, use:

```bash
netlify dev --port 8889
```

## Main Files

- `src/routes/index.tsx` contains the complete single-page website.
- `src/routes/__root.tsx` defines global metadata and font loading.
- `src/styles.css` contains the responsive visual system, animations, and component styling.
- `netlify.toml` contains the deployment configuration.

The physician identity and contact details are fictional and intended for demonstration.
