import React, { useState } from 'react';
import DetailSkills from './detailedskills/DetailSkills';
import BasicSkills from './basicskills/BasicSkills';
import Switch from "./switch/Switch";
import "./skills.css";

const Skills = () => {
  const [toggleState, setToggleState] = useState(1);
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Abilities</span>
      <div className="container">

        <div className="skills-tabs">
          <div className={toggleState === 1 ? "skills-button history-active button--flex"
            : "skills-button button--flex"} onClick={() => setToggleState(1)}>
            <span>Basic</span>
          </div>

          <Switch />

          <div className={toggleState === 2 ? "skills-button history-active button--flex"
            : "skills-button button--flex"} onClick={() => setToggleState(2)}>
            <span>Detailed</span>
          </div>
        </div>

        <div className="history-sections">
          <div className={toggleState === 1 ? "history-content history-content-active"
              : "history-content"}>
            <BasicSkills />
          </div>
          <div className={toggleState === 2 ? "history-content history-content-active"
              : "history-content"}>
            <DetailSkills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
