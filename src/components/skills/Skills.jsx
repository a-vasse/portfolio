import React, { useState } from 'react';
import DetailSkills from './detailedskills/DetailSkills';
import BasicSkills from './basicskills/BasicSkills';
import "./skills.css";

const Skills = () => {
  const [toggleState, setToggleState] = useState(1);
  return (
    <section className="skills section" id="basicskills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Abilities</span>
      <div className="skills-container container grid">

        <div className="history-tabs">
          <div className={toggleState === 1 ? "history-button history-active button--flex"
            : "history-button button--flex"} onClick={() => setToggleState(1)}>
            <i className="fa-solid fa-briefcase history-icon"></i>{" "}Basic
          </div>
          <div className={toggleState === 2 ? "history-button history-active button--flex"
            : "history-button button--flex"} onClick={() => setToggleState(2)}>
            <i className="fa-solid fa-graduation-cap history-icon"></i>{" "}Detailed
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
