import React, { useState } from 'react';

const FrontendModal = () => {
  const [toggleState, setToggleState] = useState(0);
  return (
    <div className="detailskill-content">
      <div>
        <i className="fa-solid fa-laptop-code detailskills-icon"></i>
        <h3 className="detailskill-title">Frontend<br />Development</h3>
      </div>

      <span className="detailskills-button" onClick={() => setToggleState(1)}>
        View Details<i className="fa-solid fa-arrow-right detailskills-button-icon"></i></span>

      <div className={toggleState === 1 ? "detailskills-modal active-modal" : "detailskills-modal"}>
        <div className="detailskills-modal-content">
          <i onClick={() => setToggleState(0)} className="fa-solid fa-xmark detailskills-modal-close"></i>
          <h3 className="detailskills-modal-title">Frontend Development</h3>
          <p className="detailskills-modal-description">Experience with front end tech:</p>
          <ul className="detailskills-modal-detailskills grid">
            <li className="detailskills-modal-detailskill">
              <i className="fa-brands fa-html5 detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>HTML:</b> Web browser documentation markup language</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="fa-brands fa-css3-alt detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>CSS:</b> Document presentation style sheet language</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="fa-brands fa-square-js detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>Javascript:</b> Client side programming language</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="fa-brands fa-react detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>React.js:</b> Open source frontend Javascript library</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="fa-brands fa-bootstrap detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>Bootstrap:</b> CSS frontend framework</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FrontendModal;
