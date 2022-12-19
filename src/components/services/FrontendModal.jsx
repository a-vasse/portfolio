import React, { useState } from 'react';

const FrontendModal = () => {
  const [toggleState, setToggleState] = useState(0);
  return (
    <div className="service-content">
      <div>
        <i className="fa-solid fa-laptop-code services-icon"></i>
        <h3 className="service-title">Frontend<br />Development</h3>
      </div>

      <span className="services-button" onClick={() => setToggleState(1)}>
        View Breakdown<i className="fa-solid fa-arrow-right services-button-icon"></i></span>

      <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
        <div className="services-modal-content">
          <i onClick={() => setToggleState(0)} className="fa-solid fa-xmark services-modal-close"></i>
          <h3 className="services-modal-title">Frontend Development</h3>
          <p className="services-modal-description">Experience with front end tech:</p>
          <ul className="services-modal-services grid">
            <li className="services-modal-service">
              <i className="fa-brands fa-html5 services-modal-icon"></i>
              <p className="services-modal-info"><b>HTML:</b> Web browser documentation markup language</p>
            </li>

            <li className="services-modal-service">
              <i className="fa-brands fa-css3-alt services-modal-icon"></i>
              <p className="services-modal-info"><b>CSS:</b> Document presentation style sheet language</p>
            </li>

            <li className="services-modal-service">
              <i className="fa-brands fa-square-js services-modal-icon"></i>
              <p className="services-modal-info"><b>Javascript:</b> Client side programming language</p>
            </li>

            <li className="services-modal-service">
              <i className="fa-brands fa-react services-modal-icon"></i>
              <p className="services-modal-info"><b>React.js:</b> Open source frontend Javascript library</p>
            </li>

            <li className="services-modal-service">
              <i className="fa-brands fa-bootstrap services-modal-icon"></i>
              <p className="services-modal-info"><b>Bootstrap:</b> CSS frontend framework</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FrontendModal;
