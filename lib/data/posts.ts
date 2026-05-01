export type Post = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  image: string;
  excerpt?: string;
  lead?: boolean;
};

export const posts: Post[] = [
  {
    slug: "on-limestone",
    title: "On limestone, lime wash and the patience of soft materials.",
    tag: "Field Notes · 8 min read",
    date: "March 2025",
    image: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A short essay on why we keep coming back to materials that change — and what they ask of the people who live with them.",
    lead: true,
  },
  {
    slug: "drafting-casa-levante",
    title: "Drafting Casa Levante: 14 sections of the same wall.",
    tag: "Process · 4 min",
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=75",
  },
  {
    slug: "workshop-bekal",
    title: "A long lunch with the carpenters at Workshop Bekal.",
    tag: "Conversation · 6 min",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=75",
  },
];
