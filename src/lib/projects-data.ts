export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/projects/ecommerce.svg",
    link: "#",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop boards, real-time updates, and team chat.",
    image: "/projects/taskapp.svg",
    link: "#",
    tags: ["React", "Node.js", "WebSocket"],
  },
  {
    title: "AI Writing Assistant",
    description: "Browser extension that helps writers with grammar, style suggestions, and content generation.",
    image: "/projects/aiwriter.svg",
    link: "#",
    tags: ["TypeScript", "OpenAI", "Chrome API"],
  },
];
