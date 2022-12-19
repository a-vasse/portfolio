import React, { useState } from 'react';

const ToolsModal = () => {
  const [toggleState, setToggleState] = useState(0);
  return (
    <div className="detailskill-content">
      <div>
        <i className="fa-solid fa-screwdriver-wrench detailskills-icon"></i>
        <h3 className="detailskill-title">Tools<br />I Use</h3>
      </div>

      <span className="detailskills-button" onClick={() => setToggleState(1)}>
        View Details<i className="fa-solid fa-arrow-right detailskills-button-icon"></i></span>

      <div className={toggleState === 1 ? "detailskills-modal active-modal" : "detailskills-modal"}>
        <div className="detailskills-modal-content">
          <i onClick={() => setToggleState(0)} className="fa-solid fa-xmark detailskills-modal-close"></i>
          <h3 className="detailskills-modal-title">Tools I Use</h3>
          <p className="detailskills-modal-description">I use the following tools and applications:</p>
          <ul className="detailskills-modal-detailskills grid">
            <li className="detailskills-modal-detailskill">
              <i className="devicon-slack-plain detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>Slack:</b> Instant messaging program</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="devicon-trello-plain detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>Trello:</b> Project management list-making program</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="devicon-figma-plain detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>Figma:</b> Web application for interface design</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="fa-brands fa-google-drive detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>Google Workspace:</b> Productivity and collaboration tools</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="devicon-github-original detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>Github:</b> Web detailskill for Git version control</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="devicon-photoshop-plain detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>Adobe Photoshop:</b> Raster graphics editor</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToolsModal;
