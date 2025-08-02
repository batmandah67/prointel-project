// app/blog/blogData.ts

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Its like a kind of torture to have to watch the show",
    excerpt: "A tale of a fateful trip that started from this tropic port...",
    date: "Feb 06, 2018",
    image: "/Naruto-1.jpg",
  },
  {
    id: 2,
    title: "Another journey back to the island",
    excerpt: "Now this is the story all about how my life got flipped...",
    date: "Mar 12, 2018",
    image: "/blog1.png",
  },
  {
    id: 3,
    title: "Mystery deep in the jungle",
    excerpt: "There was a place where no human had set foot for centuries...",
    date: "Mar 20, 2018",
    image: "/hero1.jpg",
  },
  {
    id: 4,
    title: "Kind of torture to have to watch",
    excerpt:
      "To seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift.",
    date: "Mar 30, 2018",
    image: "/blog1.png",
  },
  {
    id: 5,
    title: "Kind of torture to have to watch",
    excerpt:
      "To seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift.",
    date: "Mar 30, 2018",
    image: "/blog1.png",
  },
  {
    id: 6,
    title: "Kind of torture to have to watch",
    excerpt:
      "To seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift.",
    date: "Mar 30, 2018",
    image: "/blog1.png",
  },
  {
    id: 7,
    title: "Kind of torture to have to watch",
    excerpt:
      "To seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift.",
    date: "Mar 30, 2018",
    image: "/hero1.jpg",
  },
  {
    id: 8,
    title: "Kind of torture to have to watch",
    excerpt:
      "To seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift.",
    date: "Mar 30, 2018",
    image: "/Naruto-1.jpg",
  },
];
