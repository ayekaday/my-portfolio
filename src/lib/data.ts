import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
    nameEng: "Projects",
    hash: "#projects",
  },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "My Portfolio",
    description:
      "My first project is designed to be presented in a user-friendly way.",
    tags: [
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Slick",
      "NextJs",
    ],
    imageUrl: "/project1.jpg",
    link: "https://www.google.com",
  },

  {
    title: "Scrolling Animation",
    description:
      "My second project is focused on scrolling effects and light/dark mode transitions.",
    tags: [
      "ReactNextJs",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Page Router",
    ],
    imageUrl: "/project2.png",
    link: "https://www.google.com",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "MUI",
  "Shadcn",
  "JavaScript",
  "TypeScript",
  "React Slick",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Express",
  "Framer Motion",
  "MySQL",
  "PostgreSQL",
];
