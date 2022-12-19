import React from 'react';
import DetailSkills from './detailedskills/DetailSkills';
import BasicSkills from './basicskills/BasicSkills';
import "./skills.css";

const Skills = () => {
  return (
    <section className="basicskills section" id="basicskills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Abilities</span>
      <div className="skills-container container grid">
        <BasicSkills />
        <DetailSkills />
      </div>
    </section>
  );
};

export default Skills;
