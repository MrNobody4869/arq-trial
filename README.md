# Neo-Brutalist Portfolio & Blog

A personal portfolio website with integrated blog, built with Next.js and Tailwind CSS. Features a bold neo-brutalist design with black, white, and bright accent colors.

## Features

- **Portfolio Projects Grid** — Hover effects, category filters, and modal previews
- **Detailed Case Studies** — Project pages with overview, problem, process, and results
- **Blog Section** — Posts list and individual article pages with Markdown content
- **Neo-Brutalist Design** — Bold typography, thick borders, high contrast

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- TypeScript
- React Markdown

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home with projects grid
│   ├── blog/             # Blog list & article pages
│   ├── projects/[slug]/  # Case study pages
│   └── about/            # About page
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectsGrid.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectModal.tsx
│   └── BlogContent.tsx
└── data/
    ├── projects.ts       # Project data
    └── blog.ts           # Blog post data
```

## Adding Content

- **Projects**: Edit `src/data/projects.ts`
- **Blog posts**: Edit `src/data/blog.ts`
