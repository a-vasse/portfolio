import React, { useState } from 'react';
import "./services.css"
import FrontendModal from './FrontendModal';
import BackendModal from './BackendModal';
import ToolsModal from './ToolsModal';
import BasicModal from './BasicModal';

const Services = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Abilities</span>

      <div className="services-container container grid">
        <FrontendModal />
        <BackendModal />
        <ToolsModal />
        <BasicModal />
      </div>
    </section>
  );
};

export default Services;
