# Portfolio + Blog Website

A personal portfolio with an integrated blog feed built with Next.js, React, Tailwind CSS, and TypeScript.

## Features

- **Project Showcase** - Display your projects in a responsive grid
- **Blog Feed** - Card summaries organized by categories with read more links
- **Category Filtering** - Filter blog posts by category
- **Individual Post Pages** - Full blog post view with dedicated routes
- **About Section** - Personal introduction
- **Contact Form** - Get in touch via form submission
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Navigation** - Mobile-friendly hamburger menu
- **Footer** - Social links

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## REST API Integration

The app expects a REST API for blog and project data. Set `NEXT_PUBLIC_API_URL` to your API base URL.

**Endpoints:**
- `GET /projects` - List projects
- `GET /posts` - List blog posts (supports `?category=` and `?slug=` query params)
- `GET /categories` - List post categories
- `POST /contact` - Submit contact form

Without `NEXT_PUBLIC_API_URL`, mock data is used for demo purposes.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Base URL for REST API (optional, uses mock data if unset) |
