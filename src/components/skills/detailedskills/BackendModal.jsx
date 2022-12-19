import React, { useState } from 'react';

const BackendModal = () => {
  const [toggleState, setToggleState] = useState(0);
  return (
    <div className="detailskill-content">
      <div>
        <i className="fa-solid fa-database detailskills-icon"></i>
        <h3 className="detailskill-title">Backend<br />Development</h3>
      </div>

      <span className="detailskills-button" onClick={() => setToggleState(1)}>
        View Details<i className="fa-solid fa-arrow-right detailskills-button-icon"></i></span>

      <div className={toggleState === 1 ? "detailskills-modal active-modal" : "detailskills-modal"}>
        <div className="detailskills-modal-content">
          <i onClick={() => setToggleState(0)} className="fa-solid fa-xmark detailskills-modal-close"></i>
          <h3 className="detailskills-modal-title">Backend Development</h3>
          <p className="detailskills-modal-description">Experience with the following backend tech:</p>
          <ul className="detailskills-modal-detailskills grid">
            <li className="detailskills-modal-detailskill">
              <i className="devicon-ruby-plain detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>Ruby:</b> General-purpose programming language</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="devicon-rails-plain detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>Rails:</b> Server-side web application MVC framework</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="devicon-mysql-plain detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>MySQL:</b> Open-source relational database management</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="devicon-postgresql-plain detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>PostgreSQL:</b> RDBMS emphasizing extensibility.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BackendModal;
