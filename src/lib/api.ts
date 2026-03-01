const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  slug: string;
  publishedAt: string;
  author?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

async function fetchAPI<T>(endpoint: string): Promise<T> {
  if (!API_BASE) throw new Error("No API URL");
  const res = await fetch(`${API_BASE}${endpoint}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

export async function getProjects(): Promise<Project[]> {
  if (!API_BASE) return getMockProjects();
  try {
    return await fetchAPI<Project[]>("/projects");
  } catch {
    return getMockProjects();
  }
}

export async function getBlogPosts(category?: string): Promise<BlogPost[]> {
  if (!API_BASE) return getMockPosts();
  try {
    const url = category ? `/posts?category=${category}` : "/posts";
    return await fetchAPI<BlogPost[]>(url);
  } catch {
    return getMockPosts();
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!API_BASE) {
    return getMockPosts().find((p) => p.slug === slug) ?? null;
  }
  try {
    const posts = await fetchAPI<BlogPost[] | BlogPost>(`/posts?slug=${slug}`);
    const arr = Array.isArray(posts) ? posts : [posts];
    return arr.find((p) => p.slug === slug) ?? arr[0] ?? null;
  } catch {
    return getMockPosts().find((p) => p.slug === slug) ?? null;
  }
}

export async function getCategories(): Promise<Category[]> {
  if (!API_BASE) {
    const posts = getMockPosts();
    const map = new Map<string, number>();
    posts.forEach((p) => map.set(p.category, (map.get(p.category) ?? 0) + 1));
    return Array.from(map.entries()).map(([name, count]) => ({
      id: name.toLowerCase().replace(/\s/g, "-"),
      name,
      slug: name.toLowerCase().replace(/\s/g, "-"),
      count,
    }));
  }
  try {
    return await fetchAPI<Category[]>("/categories");
  } catch {
    const posts = getMockPosts();
    const map = new Map<string, number>();
    posts.forEach((p) => map.set(p.category, (map.get(p.category) ?? 0) + 1));
    return Array.from(map.entries()).map(([name, count]) => ({
      id: name.toLowerCase().replace(/\s/g, "-"),
      name,
      slug: name.toLowerCase().replace(/\s/g, "-"),
      count,
    }));
  }
}

function getMockProjects(): Project[] {
  return [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration.",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
    },
    {
      id: "2",
      title: "Dashboard App",
      description: "Analytics dashboard with real-time charts and reporting.",
      tags: ["React", "TypeScript", "D3.js"],
    },
    {
      id: "3",
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking with social features.",
      tags: ["React Native", "Firebase"],
    },
  ];
}

function getMockPosts(): BlogPost[] {
  return [
    {
      id: "1",
      title: "Getting Started with Next.js 15",
      excerpt: "Learn the basics of the latest Next.js release and App Router.",
      content:
        "Next.js 15 brings exciting changes to the framework. The App Router is now stable and offers a new mental model for building React applications.\n\nKey features include Server Components by default, improved streaming, and better caching controls. In this post, we'll walk through setting up a new project and explore the fundamentals.\n\nWhether you're new to Next.js or upgrading from an older version, this guide will help you get up to speed quickly.",
      category: "Web Development",
      slug: "getting-started-nextjs-15",
      publishedAt: "2024-01-15",
    },
    {
      id: "2",
      title: "Building Responsive Layouts",
      excerpt: "Best practices for creating fluid, mobile-first designs.",
      content:
        "Responsive design is essential in today's multi-device world. Start with mobile-first CSS and use relative units like rem and % for flexibility.\n\nTailwind CSS makes it easy with its responsive prefixes (sm:, md:, lg:). Combine flexbox and grid for complex layouts that adapt seamlessly.\n\nRemember to test on real devices, not just browser resizing. Touch targets should be at least 44px for accessibility.",
      category: "Design",
      slug: "building-responsive-layouts",
      publishedAt: "2024-01-10",
    },
    {
      id: "3",
      title: "TypeScript Tips for React",
      excerpt: "Improve your React code with advanced TypeScript patterns.",
      content:
        "TypeScript and React work wonderfully together. Use proper typing for props with interfaces, and leverage generics for reusable components.\n\nDon't over-type—let TypeScript infer when possible. Use the satisfies operator for object shapes that need to match a type while preserving literal types.\n\nFor event handlers, React provides built-in types like React.ChangeEvent and React.MouseEvent. Import these to avoid any types.",
      category: "Web Development",
      slug: "typescript-tips-react",
      publishedAt: "2024-01-05",
    },
    {
      id: "4",
      title: "Dark Mode Implementation",
      excerpt: "A complete guide to adding dark mode to your web apps.",
      content:
        "Dark mode has become a user expectation. The key is using CSS variables and the prefers-color-scheme media query for system preference.\n\nStore user preference in localStorage and apply a class to the document root. Tailwind's dark: variant makes styling effortless.\n\nEnsure sufficient contrast in both modes. Test your color palette to meet WCAG guidelines for readability.",
      category: "Design",
      slug: "dark-mode-implementation",
      publishedAt: "2024-01-01",
    },
  ];
}
