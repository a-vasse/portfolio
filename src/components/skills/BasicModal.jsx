import React, { useState } from 'react';

const BasicModal = () => {
  const [toggleState, setToggleState] = useState(0);
  return (
    <div className="detailskill-content">
      <div>
        <i className="fa-solid fa-school detailskills-icon"></i>
        <h3 className="detailskill-title">Basic<br />Knowledge</h3>
      </div>

      <span className="detailskills-button" onClick={() => setToggleState(1)}>
        View Details<i className="fa-solid fa-arrow-right detailskills-button-icon"></i></span>

      <div className={toggleState === 1 ? "detailskills-modal active-modal" : "detailskills-modal"}>
        <div className="detailskills-modal-content">
          <i onClick={() => setToggleState(0)} className="fa-solid fa-xmark detailskills-modal-close"></i>
          <h3 className="detailskills-modal-title">Basic Knowledge</h3>
          <p className="detailskills-modal-description">I have very basic knowledge of:</p>
          <ul className="detailskills-modal-detailskills grid">
            <li className="detailskills-modal-detailskill">
              <i className="devicon-java-plain detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>Java:</b> Object orientated programming language</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="devicon-python-plain detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>Python:</b> General purpose programming language</p>
            </li>

            <li className="detailskills-modal-detailskill">
              <i className="devicon-nodejs-plain detailskills-modal-icon"></i>
              <p className="detailskills-modal-info"><b>Node.js:</b> Open source server environment</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BasicModal;
