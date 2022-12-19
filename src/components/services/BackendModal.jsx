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
        View Breakdown<i className="fa-solid fa-arrow-right services-button-icon"></i></span>

      <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
        <div className="services-modal-content">
          <i onClick={() => setToggleState(0)} className="fa-solid fa-xmark services-modal-close"></i>
          <h3 className="services-modal-title">Backend Development</h3>
          <p className="services-modal-description">Experience with the following backend tech:</p>
          <ul className="services-modal-services grid">
            <li className="services-modal-service">
              <i className="devicon-ruby-plain services-modal-icon"></i>
              <p className="services-modal-info"><b>Ruby:</b> General-purpose programming language</p>
            </li>

            <li className="services-modal-service">
              <i className="devicon-rails-plain services-modal-icon"></i>
              <p className="services-modal-info"><b>Rails:</b> Server-side web application MVC framework</p>
            </li>

            <li className="services-modal-service">
              <i className="devicon-mysql-plain services-modal-icon"></i>
              <p className="services-modal-info"><b>MySQL:</b> Open-source relational database management</p>
            </li>

            <li className="services-modal-service">
              <i className="devicon-postgresql-plain services-modal-icon"></i>
              <p className="services-modal-info"><b>PostgreSQL:</b> RDBMS emphasizing extensibility.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BackendModal;
