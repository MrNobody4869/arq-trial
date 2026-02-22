# Tailwind CSS Utility Patterns

## Philosophy

Tailwind is a utility-first CSS framework. Instead of writing custom CSS, compose small utility classes directly in markup. This co-locates styling with structure, eliminates naming debates, and makes refactoring safe.

## Responsive Breakpoints

Tailwind uses a mobile-first approach. Unprefixed utilities target all sizes; prefixed utilities apply at that breakpoint **and above**:

| Prefix | Min-width | Typical target |
|--------|-----------|----------------|
| `sm:`  | 640px     | Large phones   |
| `md:`  | 768px     | Tablets        |
| `lg:`  | 1024px    | Laptops        |
| `xl:`  | 1280px    | Desktops       |
| `2xl:` | 1536px    | Large screens  |

## Component Recipes

**Button:** `inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:pointer-events-none`

**Card:** `rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950`

**Input:** `w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100`

**Badge:** `inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400`

## Animation Utilities

Built-in: `animate-spin`, `animate-ping`, `animate-pulse`, `animate-bounce`

Custom keyframes can be defined via `@theme` (Tailwind v4) or `tailwind.config.ts` using the `theme.extend.keyframes` and `theme.extend.animation` fields.

## Dark Mode

Use the `class` strategy. Toggle a `dark` class on `<html>`. Pattern for all color-dependent elements: always specify both light and dark variants (e.g. `text-gray-900 dark:text-gray-100` and `bg-white dark:bg-gray-950`).

## Theme Customization

Extend the default theme rather than overriding. Use `theme.extend.colors` for brand colors, `theme.extend.fontFamily` for custom fonts.

## Spacing & Typography Scale

Tailwind uses a 4px base unit: `p-1` = 4px, `p-2` = 8px, `p-4` = 16px, `p-8` = 32px.

Typography scale: `text-xs` (12px), `text-sm` (14px), `text-base` (16px), `text-lg` (18px), `text-xl` (20px), `text-2xl` (24px), `text-3xl` (30px), `text-4xl` (36px).

Font weights: `font-light` (300), `font-normal` (400), `font-medium` (500), `font-semibold` (600), `font-bold` (700).

## Conditional Classes Pattern

Use `clsx` + `tailwind-merge` for clean conditional class merging via a `cn()` utility function.
