# Tushar Nirmal Portfolio

A modern developer portfolio built with React, TypeScript, Vite, GSAP, and Three.js.

This project showcases my work, skills, and contact details through a smooth animated experience with interactive 3D elements and scroll-based transitions.

## Features

- Responsive personal portfolio website
- Animated landing section with GSAP
- Smooth scroll interactions
- Interactive 3D experience powered by Three.js and React Three Fiber
- Project showcase section
- Skills and tech stack highlights
- Contact section for quick reach-out

## Tech Stack

- React
- TypeScript
- Vite
- GSAP
- Three.js
- React Three Fiber
- CSS

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The app will start on a local Vite development server.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
src/
  components/        Reusable UI and section components
  components/utils/  Animation and helper utilities
  context/           App-level providers
  data/              Static portfolio data
public/
  images/            Portfolio images
  models/            3D assets
```

## Deployment

This project is ready to deploy on platforms like Netlify or Vercel.

For Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

A `netlify.toml` file is included for deployment configuration.

## Notes

- This project uses the standard `gsap` package for production-safe deployment.
- If content changes are not visible after deployment, make sure the latest changes are pushed to GitHub and the hosting platform has completed a fresh rebuild.

## License

This project is licensed under the license provided in [LICENSE](./LICENSE).
