import react from "../assets/react.png";
import ts from "../assets/typescript.png";
import css from "../assets/css.png";
import vite from "../../public/vite.svg";
import tailwind from "../assets/tailwind.png";
import js from "../assets/javascript.png";
import java from "../assets/java.png";
import html from "../assets/html.png";

import hellenic from "../assets/hellenic.png";
import calculator from "../assets/calculator.png";

export interface Technology {
  name: string;
  logo: string;
  website: string; // Add website URL
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  date: string;
  github?: string;
  about?: string;
  demo?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React and TypeScript featuring dark mode, smooth animations, and glassmorphism design.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    technologies: [
      { name: "React", logo: react, website: "https://react.dev" },
      { name: "TypeScript", logo: ts, website: "https://www.typescriptlang.org" },
      { name: "CSS", logo: css, website: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Vite", logo: vite, website: "https://vitejs.dev" },
      { name: "Tailwind", logo: tailwind, website: "https://tailwindcss.com" },
    ],
    date: "October 2024",
    github: "https://github.com/WallaceCopen/portfolio",
    demo: "https://367323c7.portfolio-97p.pages.dev/",
    about: "#about",
    featured: true
  },
  {
    id: 2,
    title: "Climbing Website",
    description: "A website I made for fun about rock climbing.",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=500&fit=crop",
    technologies: [
      { name: "HTML", logo: html, website: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "JavaScript", logo: js, website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "CSS", logo: css, website: "https://developer.mozilla.org/en-US/docs/Web/CSS" }
    ],
    date: "June-July 2024",
    github: "https://github.com/WallaceCopen/Rock-Climbing",
    featured: true,
    about: "#about"
  },
  {
    id: 3,
    title: "Hellenic",
    description: "A minecraft mod I am working on about greek mythology.",
    image: hellenic,
    technologies: [
      { name: "Java", logo: java, website: "https://java.com" },
    ],
    date: "September 2025 - Present",
    github: "https://github.com/WallaceCopen/Hellenic",
    about: "#about",
    featured: true
  },
  {
    id: 4,
    title: "Calculator",
    description: "A in console calculator app I made using java.",
    image: calculator,
    technologies: [
      { name: "Java", logo: java, website: "https://java.com" },
    ],
    date: "August 2025",
    github: "https://github.com/WallaceCopen/calculator",
    featured: false,
    about: "#about"
  }
];