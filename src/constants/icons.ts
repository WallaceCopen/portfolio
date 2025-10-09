import { IconItem } from "../components/about/IconMarquee";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import ts from "../assets/typescript.png";
import reactLogo from "../assets/react.png";
import java from "../assets/java.png";
import git from "../assets/git.png"
import vite from "../../public/vite.svg"
import vscode from "../assets/vscode.png"
import figma from "../assets/figma.svg"
import node from "../assets/node.png"
import intelli from "../assets/intelli.png"

export const LANGUAGES_ICON_SET: IconItem[] = [
    { label: "HTML",       imgSrc: html },
    { label: "CSS",        imgSrc: css },
    { label: "JavaScript", imgSrc: js },
    { label: "TypeScript", imgSrc: ts },
    { label: "React",      imgSrc: reactLogo },
    { label: "Java",       imgSrc: java },
]

export const TOOLS_ICON_SET: IconItem[] = [
    { label: "Git",     imgSrc:  git},
    { label: "Vite",       imgSrc: vite },
    { label: "VS Code",    imgSrc: vscode },
    { label: "Figma",      imgSrc: figma },
    { label: "Node.js",    imgSrc: node },
    { label: "IntelliJ", imgSrc: intelli},
  ];