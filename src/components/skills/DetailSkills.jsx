import React from 'react';
import "./detailskills.css"
import FrontendModal from './FrontendModal';
import BackendModal from './BackendModal';
import ToolsModal from './ToolsModal';
import BasicModal from './BasicModal';

const DetailSkills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Abilities</span>

      <div className="detailskills-container container grid">
        <FrontendModal />
        <BackendModal />
        <ToolsModal />
        <BasicModal />
      </div>
    </section>
  );
};

export default DetailSkills;
