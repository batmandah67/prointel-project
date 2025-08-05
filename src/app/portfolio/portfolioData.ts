// ✅ data/portfolioData.ts
export interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  extraImage?: string;
  description: string;
  client: string;
  date: string;
  budget: string;
  category: string;
}

export const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Business Meeting",
    subtitle: "Explore strange new worlds",
    image: "/Naruto-1.jpg",
    extraImage: "/hero-bg.jpg",
    description:
      "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted...",
    client: "James Morgan",
    date: "25/Jan/2018",
    budget: "$3,450",
    category: "Business Consulting",
  },
  {
    id: 2,
    title: "Marketing Strategy",
    subtitle: "Boldly go where no man has gone before",
    image: "/Naruto-1.jpg",

    extraImage: "/hero-bg.jpg",
    description:
      "Moving on up to the east side a family to explore strange to seek out new life and new civilizations.",
    client: "Emma Stone",
    date: "13/Feb/2021",
    budget: "$5,600",
    category: "Marketing",
  },
  {
    id: 3,
    title: "Growth Planning",
    subtitle: "Building the future together",
    image: "/Naruto-1.jpg",

    extraImage: "/hero-bg.jpg",
    description:
      "The man has gone before you would see the biggest gift would be from me and the card attached.",
    client: "John Carter",
    date: "02/Dec/2023",
    budget: "$7,200",
    category: "Strategic Planning",
  },
  {
    id: 4,
    title: "Startup Branding",
    subtitle: "Igniting bold identities",
    image: "/Naruto-1.jpg",
    extraImage: "/hero-bg.jpg",
    description:
      "Come and knock on our door we've been waiting for you where the kisses are hers and hers and his.",
    client: "Sophia Davis",
    date: "10/Apr/2020",
    budget: "$2,900",
    category: "Branding",
  },
  {
    id: 5,
    title: "Digital Transformation",
    subtitle: "Modernizing for tomorrow",
    image: "/Naruto-1.jpg",
    extraImage: "/hero-bg.jpg",
    description:
      "Their house is a museum where people come to see 'em. They really are a scream, the Addams Family.",
    client: "Michael Scott",
    date: "22/Jun/2022",
    budget: "$4,800",
    category: "Technology",
  },
  {
    id: 6,
    title: "Web Redesign",
    subtitle: "Bringing visions to life",
    image: "/Naruto-1.jpg",
    extraImage: "/hero-bg.jpg",
    description:
      "Believe it or not I'm walking on air I never thought I could feel so free.",
    client: "Angela White",
    date: "15/Jul/2021",
    budget: "$3,200",
    category: "Web Design",
  },
  {
    id: 7,
    title: "Content Campaign",
    subtitle: "Words that convert",
    image: "/Naruto-1.jpg",
    extraImage: "/hero-bg.jpg",
    description:
      "Here's the story of a lovely lady who was bringing up three very lovely girls.",
    client: "Robert King",
    date: "03/Sep/2023",
    budget: "$2,500",
    category: "Content Marketing",
  },
  {
    id: 8,
    title: "App Launch Strategy",
    subtitle: "Reaching global scale",
    image: "/Naruto-1.jpg",
    extraImage: "/hero-bg.jpg",
    description:
      "Fighting for freedom over land and sea, when you’re feeling sad just sing with me.",
    client: "Rachel Green",
    date: "11/Nov/2020",
    budget: "$6,100",
    category: "Product Strategy",
  },
  {
    id: 9,
    title: "E-commerce Optimization",
    subtitle: "Turning clicks into customers",
    image: "/Naruto-1.jpg",
    extraImage: "/hero-bg.jpg",
    description:
      "Here's the tale of our castaways they're here for a long long time they'll have to make the best of things.",
    client: "Liam Moore",
    date: "08/Aug/2021",
    budget: "$9,300",
    category: "E-Commerce",
  },
  {
    id: 10,
    title: "Social Media Blitz",
    subtitle: "Going viral fast",
    image: "/Naruto-1.jpg",
    extraImage: "/hero-bg.jpg",
    description:
      "Now the world don't move to the beat of just one drum. What might be right for you may not be right for some.",
    client: "Ella Brown",
    date: "19/Mar/2022",
    budget: "$3,700",
    category: "Social Media",
  },
  {
    id: 11,
    title: "Financial Restructure",
    subtitle: "Strengthening foundations",
    image: "/Naruto-1.jpg",
    extraImage: "/hero-bg.jpg",
    description:
      "Fish don’t fry in the kitchen, beans don’t burn on the grill. Took a whole lotta tryin’ just to get up that hill.",
    client: "George Harris",
    date: "26/May/2019",
    budget: "$12,000",
    category: "Finance",
  },
  {
    id: 12,
    title: "Corporate Training",
    subtitle: "Upskilling your team",
    image: "/Naruto-1.jpg",
    extraImage: "/hero-bg.jpg",
    description:
      "Wouldn’t you like to get away? Sometimes you wanna go where everybody knows your name.",
    client: "Olivia Martin",
    date: "14/Feb/2024",
    budget: "$4,100",
    category: "Training",
  },
  {
    id: 13,
    title: "Event Promotion",
    subtitle: "Creating buzz & excitement",
    image: "/Naruto-1.jpg",
    extraImage: "/hero-bg.jpg",
    description:
      "Come and play, everything’s A-OK, friendly neighbors there, that’s where we meet.",
    client: "Daniel Lee",
    date: "06/Jan/2023",
    budget: "$3,800",
    category: "Event Marketing",
  },
];
