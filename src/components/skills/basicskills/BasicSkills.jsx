import React from 'react';
import "./basicskills.css";
import Backend from './Backend';
import Frontend from './Frontend';
import Tools from './Tools';
import Basic from './Basic';

const BasicSkills = () => {
  return (
      <div className="basicskills-container container grid">
        <Frontend />
        <Backend />
        <Tools />
        <Basic />
      </div>
  );
};

export default BasicSkills;
