import React, { useState } from 'react';

const BackendModal = () => {
  const [toggleState, setToggleState] = useState(0);
  return (
    <div className="service-content">
      <div>
        <i className="fa-solid fa-database services-icon"></i>
        <h3 className="service-title">Backend<br />Development</h3>
      </div>

      <span className="services-button" onClick={() => setToggleState(1)}>
        View More<i className="fa-solid fa-arrow-right services-button-icon"></i></span>

      <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
        <div className="services-modal-content">
          <i onClick={() => setToggleState(0)} className="fa-solid fa-xmark services-modal-close"></i>
          <h3 className="services-modal-title">Backend Development</h3>
          <p className="services-modal-description">Description</p>
          <ul className="services-modal-services grid">
            <li className="services-modal-service">
              <i className="fa-solid fa-square-caret-right"></i>
              <p className="services-modal-info">Information</p>
            </li>

            <li className="services-modal-service">
              <i className="fa-solid fa-square-caret-right"></i>
              <p className="services-modal-info">Information</p>
            </li>

            <li className="services-modal-service">
              <i className="fa-solid fa-square-caret-right"></i>
              <p className="services-modal-info">Information</p>
            </li>

            <li className="services-modal-service">
              <i className="fa-solid fa-square-caret-right"></i>
              <p className="services-modal-info">Information</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BackendModal;
