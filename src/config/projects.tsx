export const projects: {
  title: string;
  href: string;
  description: string;
  image: string;
  techstack: {
    name: string;
    icon: string;
  }[];
  github: string;
  live?: string;
}[] = [
  {
    title: "Portfolio Website",
    href: "portfolio-website",
    description:
      "A personal portfolio for sharing my profile, skills, contact links, and upcoming full-stack projects.",
    image: "/imageProject.png",
    techstack: [
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "Tailwind", icon: "tailwind.svg" },
      { name: "Framer Motion", icon: "framer.svg" },
      { name: "ShadCn", icon: "shadcn.svg" },
    ],
    github: "https://github.com/hiprathamraghav/My-Portfolio",
    live: "/",
  },
  {
    title: "Full Stack Projects",
    href: "full-stack-projects",
    description:
      "Selected full-stack projects will be added here with source code, live demos, and short case studies.",
    image: "/imageProject.png",
    techstack: [
      { name: "React", icon: "react.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "Node.js", icon: "nodejs.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
      { name: "Tailwind", icon: "tailwind.svg" },
    ],
    github: "https://github.com/hiprathamraghav",
  },
  {
    title: "Open Source Practice",
    href: "open-source-practice",
    description:
      "A space for experiments, learning projects, and public repositories as I continue building my developer portfolio.",
    image: "/imageProject.png",
    techstack: [
      { name: "Git", icon: "git.svg" },
      { name: "GitHub", icon: "github.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "Tailwind", icon: "tailwind.svg" },
    ],
    github: "https://github.com/hiprathamraghav",
  },
];
