
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import Timeline from "../../components/Timeline";
//import portfolio from "../../../public/favicon.png"

const PROJECT_ABOUT_CONTENT: Record<
  string,
  {
    //image?: string;
    title: string;
    subtitle: string;
    body: string;
    highlights?: string[];
    timeline?: { date: string; label: string; description: string }[];
  }
> = {
  "portfolio": {
    title: "Portfolio Website",
    subtitle: "A personal portfolio to showcase all my work.",
    body: "This portfolio is where I display all my work. I made it with react and typescript. I wanted it to be more dynamic and exciting than my earlier websites.",
    highlights: [
      "Built with React, TypeScript, and Vite",
      "Custom dark/light theme with local storage",
      "Project cards with hover overlays and external links",
      "Designed to grow as I add more creative and technical work"
    ],
    timeline: [
      {
        date: "Fall 2025",
        label: "First Version",
        description: "Built the initial layout and hero section in figma, then coded it out with React and TypeScript."
      },
      {
        date: "Winter 2025",
        label: "Finsihed the base design",
        description: "Introduced dark mode, animations, and project section."
      },
      {
        date: "2025 and beyond",
        label: "Ongoing Updates",
        description: "Continuously adding new projects, pages, and sections as my skills and interests grow."
      }
    ]
  },
  "climbing-website": {
    title: "Climbing Website",
    subtitle: "A fun, personal project about my love for rock climbing.",
    body: "A fun little website I made in HTML and CSS about my passion for climbing. It includes useful info about the sport and what you need to get started.",
    highlights: [
      "Showcases different climbing styles and gear",
      "Has a slideshow homepage",
      "Helped me practice balancing personality and clean design"
    ],
    timeline: [
      {
        date: "Summer 2024",
        label: "Idea Phase",
        description: "Wanted a place to talk about climbing and capture how it feels to project and send new grades."
      },
      {
        date: "Future",
        label: "Ongoing Improvements",
        description: "Expanding the website and making look better. Possibly make it more useful and responsive."
      }
    ]
  },
  "hellenic": {
    title: "Hellenic Mod",
    subtitle: "A Minecraft mod exploring Greek mythology and destiny.",
    body: "Hellenic is a long-term Minecraft mod project focused on Greek mythology—gods, artifacts, abilities, and worldbuilding. I’m using it to push myself deeper into modding concepts like custom systems, registries, spell mechanics, and game balance. The goal is to create something that feels cohesive and atmospheric, not just a random collection of items. It’s also a great playground for experimenting with design ideas like progression trees, themed biomes, and unique playstyles tied to different deities.",
    highlights: [
      "Based on Greek mythology and god-themed progression",
      "A playground for learning advanced Minecraft modding concepts",
      "Focus on cohesive atmosphere over random feature dumping"
    ],
    timeline: [
      {
        date: "Fall 2025",
        label: "Concept & Prototyping",
        description: "Started sketching out ideas for gods, abilities, and how the player would progress through the mod."
      },
      {
        date: "Fall 2025–Present",
        label: "Core Systems",
        description: "Working on systems like abilities, items, and progression that can support future content."
      },
      {
        date: "Future",
        label: "Content Expansion",
        description: "Plan to add more deities, locations, and unique playstyles as the foundation becomes solid."
      }
    ]
  },
  "calculator": {
    title: "Java Console Calculator",
    subtitle: "A foundational project to practice Java logic and structure.",
    body: "The calculator is a simple console-based Java app, but it represents an important step in my programming journey. I used it to practice core concepts like control flow, user input, functions, and clean, readable code. Even though the project is small, it helped solidify my understanding of how to structure programs, handle edge cases, and think about future improvements like adding a GUI, history of operations, or more advanced functions.",
    highlights: [
      "Practiced Java control flow and basic program structure",
      "Handled user input and simple validation",
      "Helped build confidence before moving into larger Java projects"
    ],
    timeline: [
      {
        date: "2025",
        label: "Initial Version",
        description: "Created the basic calculator with core operations and a simple text-based interface."
      },
      {
        date: "Future",
        label: "Potential Upgrades",
        description: "Ideas include a GUI version, history of calculations, and support for more advanced operations."
      }
    ]
  },
  "gituserevents": {
    title: "GitHub CLI Tool",
    subtitle: "A tool used to fetch the latest events of a GitHub user",
    body: "It makes use of the GitHub API to find a user's latest activtiy. This project represents my first time interacting with an API.",
    highlights: [
      "Practiced using APIs",
      "Handled Errors and Different usages",
    ],

  }
};

const About: React.FC = () => {
      const { projectId } = useParams();

    const projectContent =
      (projectId && PROJECT_ABOUT_CONTENT[projectId]) || null;

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
      <>
        <div className={styles.aboutContainer}>
          {projectContent ? (
            <>
              <h1 className={styles.aboutTitle}>{projectContent.title}</h1>
              <h2 className={styles.aboutSubtitle}>
                {projectContent.subtitle}
              </h2>
              <p className={styles.aboutBody}>{projectContent.body}</p>
              {projectContent.highlights && projectContent.highlights.length > 0 && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    Highlights
                  </h3>
                  <ul className={styles.highlightsList}>
                    {projectContent.highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {projectContent.timeline && projectContent.timeline.length > 0 && (
                <div className={styles.timelineSection}>
                  <h3 className={styles.sectionTitle}>
                    Timeline
                  </h3>
                  <Timeline items={projectContent.timeline} />
                </div>
                  
              )}  <div className={styles.backLink}>
                    <Link to="/#projects">← Back to Projects</Link>
                  </div>
              </>
          ) : (
            <>
              <h1 className={styles.aboutTitle}>About</h1>
              <p className={styles.aboutBody}>This project does not have custom About content yet.</p>
              <div className={styles.backLink}>
                <Link to="/#projects">← Back to Projects</Link>
              </div>
            </>
          )}
        </div>
              
      </>
    );
}

export default About