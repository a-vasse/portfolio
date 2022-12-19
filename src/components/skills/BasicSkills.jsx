import React from 'react';
import "./basicskills.css";
import Backend from './Backend';
import Frontend from './Frontend';
import Tools from './Tools';
import Basic from './Basic';

const BasicSkills = () => {
  return (
    <div>
      <section className="basicskills section" id="basicskills">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My Technical Abilities</span>
        <div className="basicskills-container container grid">
        <Frontend />
        <Backend />
        <Tools />
        <Basic />
        </div>
      </section>
    </div>
  );
};

export default BasicSkills;
