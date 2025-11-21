import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import styles from "./AboutMe.module.css";
import { LargeTitle, Subtitle, Paragraph } from "../components/Text";

type Theme = "light" | "dark";

type TimelineItemData = {
  id: string;
  date: string;
  label: string;
  description: string;
};

const interests: string[] = [
  "Building web projects with React, TypeScript, and Vite",
  "Learning more about Minecraft modding and game design",
  "Training for harder boulders and sport climbs",
  "Working with cybersecurity and linux",
  "Building computers and other pieces of technology/electronics",
];

const timelineItems: TimelineItemData[] = [
  {
    id: "coding",
    date: "Summer of 2021",
    label: "Fell in love with web development",
    description:
      "Started exploring programming, web development, and how software actually works under the hood.",
  },
  {id: "firstPC",
    date: "Fall of 2023",
    label: "Built My First PC",
    description: "I built my first custom PC from parts I researched and ordered online. It was a fun experience that taught me a lot about computer hardware and assembly. I now use this PC for gaming, programming, and other creative projects.",
  },
  {
    id: "climbing",
    date: "Spring of 2024",
    label: "Started Rock Climbing",
    description: "I started rock climbing and quickly started to improve and love the sport. Now I am on a youth climbing team and compete regularly.",
  },
  {
    id: "now",
    date: "Right Now",
    label: "Building & Learning",
    description:
      "Right now I am working on projects that expand my current skillset. I am also learning new programming languages and frameworks. Additionally I am learning more cybersecurity concepts.",
  },
];

// Small utility kept outside render so it’s not recreated every time
const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "dark"; // fallback for safety
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const AboutCard: React.FC<{
  title: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}> = ({ title, variant = "secondary", children }) => {
  const cardClassName =
    variant === "primary"
      ? `${styles.aboutMeCard} ${styles.aboutMeCardPrimary}`
      : `${styles.aboutMeCard} ${styles.aboutMeCardSecondary}`;

  return (
    <section className={cardClassName}>
      <h2 className={styles.aboutMeCardTitle}>{title}</h2>
      {children}
    </section>
  );
};

const TimelineItem: React.FC<{ item: TimelineItemData; index: number }> = ({
  item,
}) => {
  return (
    <div className={styles.aboutMeTimelineItem}>
      <div className={styles.aboutMeTimelineDate}>{item.date}</div>
      <div className={styles.aboutMeTimelineLabel}>{item.label}</div>
      <p className={styles.aboutMeTimelineDescription}>{item.description}</p>
    </div>
  );
};

const AboutMe: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>

      <Navbar />

      <main className={styles.aboutMePage}>
        <header className={styles.aboutMeHeader}>
          <LargeTitle>More About Me</LargeTitle>
          <Subtitle>Wallace Copen</Subtitle>
          <Paragraph>
            I&apos;m a student, developer, and climber who likes building
            things, learning fast, and pushing into hard problems—whether
            that&apos;s on a wall or in code.
          </Paragraph>
        </header>

        <section className={styles.aboutMeGrid} aria-label="About overview">
          <AboutCard title="Who I Am" variant="primary">
            <Paragraph>
              I split most of my time between coding, rock climbing, and
              creative projects. I like exploring how design, storytelling, and
              technology fit together—from building web apps and Minecraft mods
              to planning long-term goals for climbing and personal growth.
            </Paragraph>
            <Paragraph>
              I care a lot about craft: clean code, thoughtful design, and doing
              hard things on purpose so I can see real progress over time.
            </Paragraph>
          </AboutCard>

          <AboutCard title="Right Now I&apos;m Into">
            <ul className={styles.aboutMeList}>
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </AboutCard>
        </section>

        <section
          className={styles.aboutMeTimelineSection}
          aria-label="Personal timeline"
        >
          <h2 className={styles.aboutMeSectionTitle}>A QUICK TIMELINE OF MY LIFE</h2>
          <div className={styles.aboutMeTimeline}>
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutMe;