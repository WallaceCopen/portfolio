import React from "react";
import IconList from "./IconList";
import { SKILLS } from "../../data/skills";
import { TOOLS } from "../../data/tools";
import AboutText from "./AboutText";

const AboutSections: React.FC= () => {
  return (
    <>
      <AboutText />
      {/* Skills section */}
      <IconList title="Skills" items={SKILLS} columns={6} marquee  />

      {/* Tools/Programs section */}
      <IconList title="Tools / Programs" items={TOOLS} columns={6} marquee reverse />
    </>
  );
}

export default AboutSections;