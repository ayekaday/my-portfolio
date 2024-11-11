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
      "This project has been designed to present in a way that is user-friendly.",
    tags: [
      "ReactJs",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "React Slick",
      "NextJs",
    ],
    imageUrl: "/project4.jpg",
    link: "https://www.google.com",
  },

  {
    title: "Snowlake Theme",
    description: "Abcadsndjfngjjrgjnhj",
    tags: [
      "ReactNextJs",
      "TypeScript",
      "Tailwind",
      "MUI",
      "Shadcn",
      "Nodejs",
      "Express",
      "NestJS",
      "MySQL",
      "PostgreSQL",
    ],
    imageUrl: "/woman3.png",
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
