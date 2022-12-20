import React, { useState } from 'react';
import DetailSkills from './detailedskills/DetailSkills';
import BasicSkills from './basicskills/BasicSkills';
import Switch from './switch/Switch';
import "./skills.css";

const Skills = () => {
  const [toggleState, setToggleState] = useState(false);
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">My Skills</h2>
      <span className="section-subtitle">My Technical Abilities</span>
      <div className="container">

        <div className="skills-tabs">
          <div className={toggleState === false ? "skills-button skills-active button--flex"
            : "skills-button button--flex"}>
            <span>Basic</span>
          </div>

          <Switch isOn={toggleState} handleToggle={() => setToggleState(!toggleState)}/>

          <div className={toggleState === true ? "skills-button skills-active button--flex"
            : "skills-button button--flex"}>
            <span>Detailed</span>
          </div>
        </div>

        <div className="history-sections">
          <div className={toggleState === false ? "history-content history-content-active"
              : "history-content"}>
            <BasicSkills />
          </div>
          <div className={toggleState === true ? "history-content history-content-active"
              : "history-content"}>
            <DetailSkills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
