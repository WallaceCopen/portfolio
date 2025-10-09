import React from "react";
import IconList from "./IconMarquee";
import { LANGUAGES_ICON_SET, TOOLS_ICON_SET } from "../../constants/icons";
import styles from "./AboutSection.module.css";
import { LargeTitle, Paragraph } from "../Text";

const AboutSections: React.FC= () => {
  return (
  <div id="about" className={styles.aboutSection}>
      <div className={styles.biography}>
        <LargeTitle>Who Am I?</LargeTitle>
        <Paragraph>
          Hi, I am Wallace Copen. I am a high school student who studies computer science. I mainly design and develop modern and sleek websites.
        </Paragraph>
      </div>

      {/* Skills section */}
        <IconList title="Skills" items={LANGUAGES_ICON_SET} />

      {/* Tools/Programs section */}
      <IconList title="Tools / Programs" items={TOOLS_ICON_SET} reverse />
      </div>

  );
};

export default AboutSections;