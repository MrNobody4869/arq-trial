export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn the fundamentals of building modern web applications with Next.js and React.",
    content: `
Next.js has become one of the most popular frameworks for building React applications. It offers server-side rendering, static site generation, and a great developer experience out of the box.

## Why Next.js?

Next.js solves many of the challenges developers face when building production React applications. It provides:

- **File-based routing** - No need to configure React Router
- **API routes** - Build your backend within the same project
- **Optimized images** - Automatic image optimization with next/image
- **Zero config** - Works great with minimal setup

## Getting Started

To create a new Next.js project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

Follow the prompts to configure your project. Once complete, you'll have a fully functional Next.js application ready for development.
    `,
    date: "2024-02-15",
    author: "Alex Chen",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS",
    excerpt: "A comprehensive guide to building beautiful interfaces with utility-first CSS.",
    content: `
Tailwind CSS has revolutionized how we write CSS. Instead of writing custom styles for every component, we use utility classes that compose together.

## The Utility-First Philosophy

Traditional CSS approaches often lead to unused styles and specificity battles. Tailwind flips this by providing low-level utility classes that you combine to create designs.

## Key Concepts

1. **Responsive Design** - Use breakpoint prefixes: \`md:text-lg\`, \`lg:flex\`
2. **Dark Mode** - Toggle styles with \`dark:bg-gray-900\`
3. **Hover States** - Add interactivity: \`hover:bg-blue-600\`
4. **Customization** - Extend the config for your design system

## Best Practices

- Extract repeated patterns into components
- Use @apply sparingly for truly repeated patterns
- Leverage the JIT compiler for purged builds
    `,
    date: "2024-02-10",
    author: "Alex Chen",
    tags: ["Tailwind", "CSS", "Design"],
  },
  {
    slug: "building-portfolios-that-convert",
    title: "Building Portfolios That Convert",
    excerpt: "Design and content strategies to turn visitors into opportunities.",
    content: `
Your portfolio is often the first impression you make. Here's how to design one that opens doors.

## Show, Don't Tell

Instead of listing technologies, demonstrate your skills through actual projects. Include:
- Clear problem statements
- Your approach and process
- Measurable outcomes
- Links to live projects and code

## Content Structure

1. **Hero** - Who you are, what you do, one compelling line
2. **Projects** - 3-6 strongest pieces with context
3. **About** - Your story, not your resume
4. **Contact** - Make it obvious how to reach you

## Performance Matters

A fast portfolio shows you care about user experience. Optimize images, minimize JavaScript, and test on real devices.
    `,
    date: "2024-02-05",
    author: "Alex Chen",
    tags: ["Portfolio", "Career", "Design"],
  },
];
