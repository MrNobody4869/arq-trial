export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  content: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "neo-brutalism-design-trend",
    title: "Why Neo-Brutalism Is Taking Over the Web",
    excerpt:
      "The raw, unpolished aesthetic is having a moment. Here's why designers are embracing imperfection.",
    author: "Alex Chen",
    date: "2024-02-15",
    readTime: 6,
    category: "Design",
    tags: ["Design Trends", "Neo-brutalism", "Web Design"],
    image: "/blog/neo-brutal.jpg",
    content: `Neo-brutalism emerged from a collective fatigue with the ultra-smooth, gradient-heavy design language that dominated the 2010s. Where minimalism sought to disappear, neo-brutalism demands to be seen.

## The Aesthetic

At its core, neo-brutalism rejects polish. You'll see:

- **Hard edges** — No rounded corners, or very few
- **Bold borders** — Thick black outlines that scream "I'm here"
- **High contrast** — Black and white as the foundation
- **Accent pops** — Red, yellow, or electric blue for emphasis
- **Raw typography** — Bold, often condensed or geometric

## Why It Works

First, it's memorable. In a sea of identical SaaS dashboards, a neo-brutalist site stands out. Second, it's fast to implement—fewer gradients, simpler animations. Third, it feels honest. There's something refreshing about design that doesn't pretend to be something it's not.

## Getting Started

Pick two colors: black and white. Add one accent. Use a bold, slightly unusual font. Embrace the box. Don't overthink it—that's the whole point.`,
  },
  {
    id: "2",
    slug: "case-study-process",
    title: "How I Structure Case Studies That Get Hired",
    excerpt:
      "The format that helped me land clients and job offers. A practical breakdown.",
    author: "Alex Chen",
    date: "2024-02-08",
    readTime: 8,
    category: "Career",
    tags: ["Portfolio", "Case Studies", "Career"],
    content: `
I've reviewed hundreds of portfolios. The ones that get hired share a structure. Here's mine.

## 1. The Hook

Start with the outcome. "Increased conversion by 47%." "Reduced support tickets by half." Numbers before story. Hiring managers scan—make the scan worthwhile.

## 2. The Problem

Every good case study has a clear problem. Not "the client wanted a redesign" but "users were abandoning the checkout at a 73% rate." Specificity builds credibility.

## 3. The Process

Show your thinking, not just your output. I use 3-5 steps. Each step has a title, a paragraph of context, and supporting artifacts. Screenshots, sketches, diagrams. The goal is to demonstrate how you reason through ambiguity.

## 4. The Results

Back to numbers. What actually changed? If you don't have metrics, use quotes. "The stakeholder said..." We're looking for proof that your work had impact.

## 5. What I'd Do Differently

This is the secret sauce. Showing reflection demonstrates seniority. Every project has tradeoffs—acknowledging them makes you credible.
    `,
  },
  {
    id: "3",
    slug: "tailwind-vs-custom-css",
    title: "Tailwind vs. Custom CSS: A Pragmatic Take",
    excerpt:
      "After building 20+ projects with both, here's when I reach for each.",
    author: "Alex Chen",
    date: "2024-01-28",
    readTime: 5,
    category: "Development",
    tags: ["Tailwind", "CSS", "Frontend"],
    content: `
The Tailwind debate is tiresome. Let me give you a practical framework instead of another opinion.

## When Tailwind Wins

- **Prototyping** — Speed is everything. Utility classes let you iterate without naming things.
- **Consistency** — Design systems emerge naturally. Same spacing scale, same colors.
- **Small teams** — Fewer context switches. No jumping between CSS files.
- **Component libraries** — When you're composing existing components, Tailwind's utility approach shines.

## When Custom CSS Wins

- **Complex animations** — Keyframe sequences get messy in className strings.
- **Layout-heavy pages** — Grid and flex patterns that repeat deserve a component or a class.
- **Legacy codebases** — Don't introduce a new paradigm mid-project without good reason.
- **Design system maturity** — When you have 50+ components, a proper CSS architecture scales better.

## My Default

I start with Tailwind. When a pattern repeats three times, I extract it. Sometimes that's a component. Sometimes it's a @apply class. The goal is speed without sacrificing maintainability.
    `,
  },
  {
    id: "4",
    slug: "design-feedback-culture",
    title: "Building a Design Feedback Culture",
    excerpt:
      "Getting useful feedback is a skill. Creating a culture where it flows naturally is an art.",
    author: "Alex Chen",
    date: "2024-01-15",
    readTime: 7,
    category: "Design",
    tags: ["Feedback", "DesignOps", "Teams"],
    content: `
"Make the logo bigger" is not feedback. Here's how to get better.

## The Problem

Most design feedback is either vague ("it doesn't feel right") or prescriptive ("move that 5px left"). Neither helps. Good feedback describes the experience, not the solution.

## Feedback Prompts That Work

- "What's the first thing you noticed?" — Surfaces hierarchy issues
- "Where did you get stuck?" — Reveals flow problems
- "What would you tell a colleague about this?" — Tests clarity of message
- "What's one thing you'd change?" — Forces prioritization

## Creating the Ritual

We do 15-minute "design reviews" every Tuesday. No prep required. Someone shares their screen. We use the prompts. No defending, just listening. The designer takes notes and decides what to act on.

## The Result

Feedback became useful. Designers stopped dreading reviews. And we caught more issues before they hit production. The culture shift took about three months.
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
