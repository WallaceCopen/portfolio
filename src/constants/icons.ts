import { IconItem } from "../components/about/IconMarquee";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import ts from "../assets/typescript.png";
import reactLogo from "../assets/react.png";
import java from "../assets/java.png";
import git from "../assets/git.png";
import vite from "../../public/vite.svg";
import vscode from "../assets/vscode.png";
import figma from "../assets/figma.svg";
import node from "../assets/node.png";
import intelli from "../assets/intelli.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png"

export const LANGUAGES_ICON_SET: IconItem[] = [
  { label: "HTML", imgSrc: html, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { label: "CSS", imgSrc: css, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { label: "JavaScript", imgSrc: js, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { label: "TypeScript", imgSrc: ts, link: "https://www.typescriptlang.org/" },
  { label: "React", imgSrc: reactLogo, link: "https://react.dev/" },
  { label: "Java", imgSrc: java, link: "https://www.java.com/" },
  { label: "Tailwind CSS", imgSrc: tailwind, link: "https://tailwindcss.com/" },
  { label: "Python", imgSrc: python, link: "https://python.org"}
];

export const TOOLS_ICON_SET: IconItem[] = [
  { label: "Git", imgSrc: git, link: "https://git-scm.com/" },
  { label: "Vite", imgSrc: vite, link: "https://vitejs.dev/" },
  { label: "VS Code", imgSrc: vscode, link: "https://code.visualstudio.com/" },
  { label: "Figma", imgSrc: figma, link: "https://www.figma.com/" },
  { label: "Node.js", imgSrc: node, link: "https://nodejs.org/" },
  { label: "IntelliJ", imgSrc: intelli, link: "https://www.jetbrains.com/idea/" },
];