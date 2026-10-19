export const site = {
  name: "Tanzimul Karim",
  shortName: "Tanzim",
  portrait: {
    src: "/images/tanzimul-karim.webp",
    width: 1200,
    height: 1600,
    alt: "Tanzimul Karim seated at a table.",
  },
  github: "https://github.com/tkarimdk",
  email: null,
  linkedin: null,
  domain: process.env.NEXT_PUBLIC_SITE_URL || null,
};
export const navigation = [
  ["/", "Home"],
  ["/work", "Work"],
  ["/research", "Research"],
  ["/about", "About"],
  ["/contact", "Contact"],
] as const;
export const toolkit = [
  {
    name: "Programming & systems",
    items: ["Python", "x86 Assembly", "OpenGL"],
    context: "Graphics coursework and low-level parking logic",
  },
  {
    name: "AI & machine learning",
    items: ["PyTorch", "GNN", "DistilBERT"],
    context: "Music Context Understanding / CSE425",
  },
  {
    name: "Web & applications",
    items: ["React", "Next.js", "NestJS", "Firebase", "Leaflet"],
    context: "GRD (Contributor) and LiveGPS",
  },
  {
    name: "Data & persistence",
    items: ["MySQL", "TypeORM", "Firestore"],
    context: "River records and realtime location data",
  },
];

export const publicAsset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
