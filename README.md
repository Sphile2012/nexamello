# NexaWeb Tech Solutions

A modern, high-performance marketing website for NexaWeb Tech Solutions — built with React, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Deployment (Netlify)

This project is configured for Netlify deployment via `netlify.toml`.

1. Push to your GitHub repo
2. Connect the repo in [Netlify](https://app.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

All SPA routes are handled by the `[[redirects]]` rule in `netlify.toml`.

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS
- Framer Motion
- Radix UI / shadcn components
- React Router DOM
- TanStack Query
