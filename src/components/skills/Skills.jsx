import React from 'react';
import "./skills.css";
import Backend from './Backend';
import Frontend from './Frontend';
import Tools from './Tools';
import Basic from './Basic';

const Skills = () => {
  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My Technical Abilities</span>
        <div className="skills-container container grid">
        <Frontend />
        <Backend />
        <Tools />
        <Basic />
        </div>
      </section>
    </div>
  );
};

export default Skills;
