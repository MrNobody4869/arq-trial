# Personal Portfolio & Blog

A personal portfolio website built with Next.js and Tailwind CSS, featuring a blog, projects showcase, about section, contact form, and full dark mode support.

## Features

- **Home Page** - Hero section and projects showcase
- **About** - Dedicated about section with skills and background
- **Blog** - Article listing and individual post pages
- **Contact** - Contact form with API integration
- **Dark Mode** - Toggle with system preference detection and persistence

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # App Router pages and layouts
├── components/       # Reusable UI components
├── contexts/         # React contexts (theme)
└── lib/              # Data and utilities
```

## Customization

- **Blog posts**: Edit `src/lib/blog-data.ts` to add or modify articles
- **Projects**: Edit `src/lib/projects-data.ts` to showcase your work
- **Contact form**: Integrate `src/app/api/contact/route.ts` with your preferred email service (Resend, SendGrid, etc.)
