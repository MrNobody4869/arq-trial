export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featuredImage: string;
  publishedAt: string;
  author: string;
  readTimeMinutes: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  category: string;
  year: string;
}

export interface Author {
  name: string;
  bio: string;
  image: string;
  email: string;
}

export const author: Author = {
  name: "Elena Markov",
  bio: "Award-winning writer and essayist. I explore the intersections of memory, place, and identity through narrative nonfiction. My work has appeared in literary journals and anthologies.",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  email: "elena@example.com",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "The Long Way Home",
    description: "A memoir about migration, belonging, and the landscapes that shape us.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
    link: "#",
    category: "Memoir",
    year: "2024",
  },
  {
    id: "2",
    title: "Voices in the Archive",
    description: "Creative nonfiction exploring letters, diaries, and forgotten histories.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop",
    link: "#",
    category: "Creative Nonfiction",
    year: "2023",
  },
  {
    id: "3",
    title: "Still Points",
    description: "A collection of essays on stillness, attention, and the art of observation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    link: "#",
    category: "Essays",
    year: "2023",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "finding-your-voice-as-a-writer",
    title: "Finding Your Voice as a Writer",
    excerpt: "Voice isn't something you find once and keep forever. It evolves with every piece you write, every life you live.",
    content: `Finding your voice as a writer is one of the most elusive and rewarding journeys in the craft. It isn't something you discover in a single moment of inspiration—it emerges gradually through practice, patience, and a willingness to listen to yourself.

Voice is the distinctive quality that makes your writing recognizably yours. It's the rhythm of your sentences, the words you choose, the way you see the world and translate that vision into prose. Some writers have a voice that's lyrical and flowing; others are sharp and spare. There's no right or wrong—only what feels authentic to you.

The key is to write without censoring yourself. Let yourself experiment. Try different styles, different tones. Write badly. Write freely. Over time, patterns will emerge. You'll notice recurring images, preoccupations, ways of structuring a sentence that feel natural. That's your voice taking shape.

Trust the process. Your voice is already there, waiting to be heard.`,
    category: "Craft",
    tags: ["writing", "voice", "craft", "beginners"],
    featuredImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=500&fit=crop",
    publishedAt: "2024-02-15",
    author: "Elena Markov",
    readTimeMinutes: 5,
  },
  {
    slug: "the-art-of-the-essay",
    title: "The Art of the Essay",
    excerpt: "Essays are neither purely personal nor purely intellectual—they live in the tension between.",
    content: `The essay form has always fascinated me. It's a shape-shifter: it can be intimate and confessional, or rigorous and analytical. It can meander like a river or cut straight to the point. What unifies the best essays is a mind at work—thinking on the page, following a thread of association, arriving at something that feels both surprising and inevitable.

Montaigne called his essays "attempts"—essais. I love that. An essay doesn't have to reach a firm conclusion. It can circle a question, probe it from different angles, and leave the reader with more to think about than when they started.

The personal essay, in particular, walks a delicate line. Too much confession without reflection becomes mere diary. Too much reflection without the personal becomes an academic paper. The art is in the balance—in using the particular to illuminate the universal, the self as a lens rather than the subject.

Try writing an essay that starts with something specific—a memory, an object, a place—and lets it open outward. See where it takes you.`,
    category: "Craft",
    tags: ["essays", "creative nonfiction", "craft"],
    featuredImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    publishedAt: "2024-02-01",
    author: "Elena Markov",
    readTimeMinutes: 7,
  },
  {
    slug: "on-reading-slowly",
    title: "On Reading Slowly",
    excerpt: "In a world that rewards speed, slow reading is an act of resistance and deep pleasure.",
    content: `I used to pride myself on how many books I could finish in a year. Numbers mattered. Then, somewhere along the way, I realized I was reading to complete, not to comprehend. I was grazing when I wanted to feast.

Slow reading isn't about being sluggish. It's about attention. When you read slowly—really slowly—you notice things. The choice of a single word. The rhythm of a sentence. The way an author builds meaning through repetition or contrast. You enter into a kind of conversation with the text.

I've started keeping a commonplace book. When I read something that strikes me, I copy it down by hand. The physical act of writing slows me further, and I find I remember those passages in a way I never did when I was skimming.

If you're a writer, slow reading is essential. You learn more from one book read deeply than from ten read hastily. Give yourself permission to linger.`,
    category: "Reading",
    tags: ["reading", "books", "attention", "writing"],
    featuredImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop",
    publishedAt: "2024-01-20",
    author: "Elena Markov",
    readTimeMinutes: 4,
  },
  {
    slug: "place-and-memory",
    title: "Place and Memory",
    excerpt: "How the landscapes we've known shape the stories we tell.",
    content: `Certain places stay with us long after we've left them. A childhood street. A college dorm room. The view from a train window in a country we'll never visit again. These places become more than geography—they become containers for memory, emotion, the raw material of narrative.

When I write, I often begin with place. Not because I'm describing it for its own sake, but because place activates memory. The smell of rain on hot pavement. The way light falls through a particular window. These sensory details open doors to the past.

Writers of place—from Annie Dillard to Barry Lopez—show us that landscape is never neutral. It's layered with history, personal and collective. When we write about a place, we're inevitably writing about who we were when we were there, who we've become since, and the gap between.

Where are the places that haunt you? Start there.`,
    category: "Reflections",
    tags: ["place", "memory", "landscape", "narrative"],
    featuredImage: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=500&fit=crop",
    publishedAt: "2024-01-05",
    author: "Elena Markov",
    readTimeMinutes: 6,
  },
  {
    slug: "rejection-and-persistence",
    title: "Rejection and Persistence",
    excerpt: "Every published writer has a drawer full of rejections. Here's what I've learned from mine.",
    content: `I've collected rejections like some people collect stamps. Form letters. Scribbled notes. The occasional encouraging rejection that almost hurts more than the flat no. In my early years, I let each one feel like a verdict. I'm not good enough. I should give up.

It took time to understand that rejection is part of the process, not a judgment on your worth. Editors have limited space, specific tastes, and their own vision for their publications. A rejection often has nothing to do with quality and everything to do with fit.

What helped me:
- Send work out and forget about it. Move on to the next piece.
- Keep a submissions spreadsheet. Track where you've sent work. Celebrate the act of submitting, not just the acceptances.
- Find your people. Other writers who understand. Community makes the lonely work less lonely.
- Read the publications you're submitting to. Know what they want.

Persistence is the real talent. The writers who "make it" are usually the ones who didn't stop.`,
    category: "Process",
    tags: ["rejection", "publishing", "persistence", "craft"],
    featuredImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop",
    publishedAt: "2023-12-15",
    author: "Elena Markov",
    readTimeMinutes: 5,
  },
  {
    slug: "morning-pages-and-routine",
    title: "Morning Pages and the Question of Routine",
    excerpt: "Does a writing routine really matter? My ambivalent relationship with discipline.",
    content: `For years I resisted the idea of a writing routine. Routines felt like constraints, the opposite of creativity. I wanted to write when inspired, when the mood struck. Spoiler: the mood didn't strike often enough.

Then I tried morning pages—three pages of longhand, first thing, no editing, no audience. Julia Cameron's method. I hated it at first. My hand hurt. My mind felt blank. But slowly, something shifted. The daily practice cleared mental clutter. It made space. And on some mornings, real material emerged—ideas, images, the seed of an essay.

I'm still ambivalent about routine. Too rigid, and writing becomes a chore. Too loose, and nothing gets done. The balance is personal. Some writers need the same time, same place, same ritual. Others need variation. The only way to find out is to experiment.

What I know: showing up matters more than feeling inspired. Discipline creates the conditions for inspiration; it doesn't replace it.`,
    category: "Process",
    tags: ["routine", "morning pages", "habit", "discipline"],
    featuredImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=500&fit=crop",
    publishedAt: "2023-12-01",
    author: "Elena Markov",
    readTimeMinutes: 5,
  },
];

export function getCategories(): string[] {
  return [...new Set(blogPosts.map((p) => p.category))].sort();
}

export function getTags(): string[] {
  return [...new Set(blogPosts.flatMap((p) => p.tags))].sort();
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((p) => p.tags.includes(tag));
}

export function searchPosts(query: string): BlogPost[] {
  const q = query.toLowerCase();
  return blogPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.content.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
  );
}
