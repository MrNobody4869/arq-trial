# Portfolio & Landing Page Patterns

## Standard Page Structure

A well-structured portfolio or landing page follows this proven flow:

1. **Hero Section** - Headline, subheadline, CTA button, optional hero image or animation
2. **About / Introduction** - Brief personal or company summary
3. **Projects / Work** - Grid or carousel of featured work
4. **Skills / Services** - What you offer, technology stack
5. **Testimonials** (optional) - Social proof
6. **Contact** - Form or links to get in touch
7. **Footer** - Social links, copyright, secondary navigation

## SEO Essentials

- Export metadata from your page or layout (title, description, Open Graph, Twitter cards)
- Use structured data (JSON-LD) for rich search results (Person, Organization, etc.)
- Only use `dangerouslySetInnerHTML` with trusted, developer-controlled data

## Accessibility Requirements

- All images must have descriptive `alt` text
- Color contrast ratio: at least 4.5:1 for normal text, 3:1 for large text
- Interactive elements must be keyboard-navigable (Tab, Enter, Escape)
- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Add `aria-label` to icon-only buttons
- Include a skip-to-content link as the first focusable element

## Performance Tips

- Use `next/image` with `priority` for hero images (above the fold)
- Lazy-load all images below the fold
- Keep the hero section lightweight to minimize initial JS bundle
- Use `font-display: swap` for custom fonts
- Preload critical assets
- Compress images to WebP/AVIF

## Common Layout Patterns

- **Project Grid Gallery:** responsive grid with 1/2/3 columns at mobile/tablet/desktop
- **Timeline:** for experience or milestones, using a left border with positioned dots
- **Bento Grid:** mixed-size cards in a CSS grid with `col-span` and `row-span`

## CTA Best Practices

- One primary CTA per section
- Action-oriented text: "View My Work", "Get In Touch", "Download Resume"
- Visually distinct with strong color contrast
- Place a CTA in the hero and repeat at the bottom
- On mobile, consider a sticky CTA or floating action button for contact
