import { IconItem } from "../components/about-section/IconList";
import git from "../assets/git.png"
import vite from "../../public/vite.svg"
import vscode from "../assets/vscode.png"
import figma from "../assets/figma.svg"
import node from "../assets/node.png"
import intelli from "../assets/intelli.png"

export const TOOLS: IconItem[] = [
  { label: "Git",     imgSrc:  git},
  { label: "Vite",       imgSrc: vite },
  { label: "VS Code",    imgSrc: vscode },
  { label: "Figma",      imgSrc: figma },
  { label: "Node.js",    imgSrc: node },
  { label: "IntelliJ", imgSrc: intelli},
];