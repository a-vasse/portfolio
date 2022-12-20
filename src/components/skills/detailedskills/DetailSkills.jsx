import React from 'react';
import "./detailskills.css"
import FrontendModal from './FrontendModal';
import BackendModal from './BackendModal';
import ToolsModal from './ToolsModal';
import BasicModal from './BasicModal';

const DetailSkills = () => {
  return (
      <div className="detailskills-container container grid">
        <FrontendModal />
        <BackendModal />
        <ToolsModal />
        <BasicModal />
      </div>
  );
};

export default DetailSkills;
