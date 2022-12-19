import React, { useState } from 'react';

const ToolsModal = () => {
  const [toggleState, setToggleState] = useState(0);
  return (
    <div className="service-content">
      <div>
        <i className="fa-solid fa-screwdriver-wrench services-icon"></i>
        <h3 className="service-title">Tools<br />I Use</h3>
      </div>

      <span className="services-button" onClick={() => setToggleState(1)}>
        View Breakdown<i className="fa-solid fa-arrow-right services-button-icon"></i></span>

      <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
        <div className="services-modal-content">
          <i onClick={() => setToggleState(0)} className="fa-solid fa-xmark services-modal-close"></i>
          <h3 className="services-modal-title">Tools I Use</h3>
          <p className="services-modal-description">I use the following tools and applications:</p>
          <ul className="services-modal-services grid">
            <li className="services-modal-service">
              <i className="devicon-slack-plain services-modal-icon"></i>
              <p className="services-modal-info"><b>Slack:</b> Instant messaging program</p>
            </li>

            <li className="services-modal-service">
              <i className="devicon-trello-plain services-modal-icon"></i>
              <p className="services-modal-info"><b>Trello:</b> Project management list-making program</p>
            </li>

            <li className="services-modal-service">
              <i className="devicon-figma-plain services-modal-icon"></i>
              <p className="services-modal-info"><b>Figma:</b> Web application for interface design</p>
            </li>

            <li className="services-modal-service">
              <i className="fa-brands fa-google-drive services-modal-icon"></i>
              <p className="services-modal-info"><b>Google Workspace:</b> Productivity and collaboration tools</p>
            </li>

            <li className="services-modal-service">
              <i className="devicon-github-original services-modal-icon"></i>
              <p className="services-modal-info"><b>Github:</b> Web service for Git version control</p>
            </li>

            <li className="services-modal-service">
              <i className="devicon-photoshop-plain services-modal-icon"></i>
              <p className="services-modal-info"><b>Adobe Photoshop:</b> Raster graphics editor</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToolsModal;
