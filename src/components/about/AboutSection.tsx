import React from "react";
import IconList from "./IconMarquee";
import { LANGUAGES_ICON_SET, TOOLS_ICON_SET } from "../../constants/icons";
import styles from "./AboutSection.module.css";
import { LargeTitle, Paragraph, Subtitle} from "../Text";
import CircleComponent from "../CircleComponent";
import profileImg from "../../assets/profile.jpeg";

const AboutSections: React.FC= () => {
  return (
  <div id="about" className={styles.aboutSection}>
      <div className={styles.biography}>
        <LargeTitle>Who Am I?</LargeTitle>
        <div className={styles.aboutContent}>
          <CircleComponent src={profileImg} size={250} link='#about' />
          <Paragraph>
          Hi! I’m Wallace Copen, a high school student from Los Angeles who has been learning computer science for 4+ years, with a love for technology, design, and creative problem-solving. I like to program stuff from websites to cyber security tools, using things like Python or React to make useful and in some cases visually engaging websites and programs. I’m constantly learning and experimenting.
          </Paragraph>
          
        </div>
      </div>
      <div className={styles.iconGroup}>
      <Subtitle className={styles.subtitle}>Languages & Skills</Subtitle>
      <IconList items={LANGUAGES_ICON_SET} />

      <h3 className={styles.subtitle}>Tools & Programs</h3>
      <IconList items={TOOLS_ICON_SET} reverse />
      </div>
      
      </div>

  );
};

export default AboutSections;