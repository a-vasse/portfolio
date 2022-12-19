import React, { useState } from 'react';

const BasicModal = () => {
  const [toggleState, setToggleState] = useState(0);
  return (
    <div className="service-content">
      <div>
        <i className="fa-solid fa-school services-icon"></i>
        <h3 className="service-title">Basic<br />Knowledge</h3>
      </div>

      <span className="services-button" onClick={() => setToggleState(1)}>
        View Breakdown<i className="fa-solid fa-arrow-right services-button-icon"></i></span>

      <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
        <div className="services-modal-content">
          <i onClick={() => setToggleState(0)} className="fa-solid fa-xmark services-modal-close"></i>
          <h3 className="services-modal-title">Basic Knowledge</h3>
          <p className="services-modal-description">I have very basic knowledge of:</p>
          <ul className="services-modal-services grid">
            <li className="services-modal-service">
              <i className="devicon-java-plain services-modal-icon"></i>
              <p className="services-modal-info"><b>Java:</b> Object orientated programming language</p>
            </li>

            <li className="services-modal-service">
              <i className="devicon-python-plain services-modal-icon"></i>
              <p className="services-modal-info"><b>Python:</b> General purpose programming language</p>
            </li>

            <li className="services-modal-service">
              <i className="devicon-nodejs-plain services-modal-icon"></i>
              <p className="services-modal-info"><b>Node.js:</b> Open source server environment</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BasicModal;
