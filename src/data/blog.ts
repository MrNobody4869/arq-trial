export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Tips for Writing Compelling B2B Copy",
    excerpt:
      "Learn how to craft copy that resonates with business decision-makers and drives conversions.",
    content: "",
    date: "2024-02-15",
    category: "Copywriting",
    slug: "5-tips-b2b-copy",
  },
  {
    id: "2",
    title: "The Art of Simplifying Complex Topics",
    excerpt:
      "Strategies for making technical or specialized content accessible to broader audiences.",
    content: "",
    date: "2024-02-08",
    category: "Content",
    slug: "simplifying-complex-topics",
  },
  {
    id: "3",
    title: "Building a Consistent Brand Voice",
    excerpt:
      "Why brand voice matters and how to develop guidelines that scale across your organization.",
    content: "",
    date: "2024-01-28",
    category: "Branding",
    slug: "building-brand-voice",
  },
  {
    id: "4",
    title: "Why Good Writing Still Matters in the AI Era",
    excerpt:
      "Human writers bring something AI cannot: authenticity, nuance, and strategic thinking.",
    content: "",
    date: "2024-01-12",
    category: "Industry",
    slug: "writing-in-ai-era",
  },
  {
    id: "5",
    title: "Content Strategy for SaaS: A Practical Framework",
    excerpt:
      "A step-by-step approach to content planning that supports both marketing and product goals.",
    content: "",
    date: "2023-12-20",
    category: "Strategy",
    slug: "content-strategy-saas",
  },
];
