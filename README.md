# Personal Portfolio

A personal portfolio website built with Next.js and Tailwind CSS, featuring projects and blog content from static MDX files.

## Features

- **Hero section** – Headline and call-to-action buttons
- **About section** – Personal summary and introduction
- **Projects showcase** – Projects loaded from static MDX files in `content/projects/`
- **Skills display** – Categorized skills section
- **Blog** – Articles loaded from static MDX files in `content/blog/`
- **Contact section** – Email and social links
- **SEO optimization** – Metadata, sitemap, and robots.txt
- **Responsive design** – Mobile-first layout

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- next-mdx-remote & gray-matter for MDX content

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Content

### Projects

Add `.mdx` files to `content/projects/` with frontmatter:

```mdx
---
title: Project Name
description: Short description
date: 2024-01-15
link: https://github.com/...
tags: ["Next.js", "TypeScript"]
---

Your project description content here...
```

### Blog Posts

Add `.mdx` files to `content/blog/` with frontmatter:

```mdx
---
title: Post Title
description: Short description
date: 2024-02-15
author: Your Name
tags: ["tag1", "tag2"]
---

Your blog post content here...
```

## Build

```bash
npm run build
npm start
```

## Environment

Set `NEXT_PUBLIC_SITE_URL` for correct sitemap and robots URLs (e.g. `https://yoursite.com`).
