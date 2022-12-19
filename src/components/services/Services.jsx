import React, { useState } from 'react';
import "./services.css"

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Abilities</span>

      <div className="services-container container grid">
        <div className="service-content">
          <div>
            <i className="fa-solid fa-laptop-code services-icon"></i>
            <h3 className="service-title">Frontend<br />Development</h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(1)}>
            View More<i className="fa-solid fa-arrow-right services-button-icon"></i></span>

          <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark services-modal-close"></i>
              <h3 className="services-modal-title">Title</h3>
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

        <div className="service-content">
          <div>
            <i className="fa-solid fa-database services-icon"></i>
            <h3 className="service-title">Backend<br />Development</h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(2)}>
            View More<i className="fa-solid fa-arrow-right services-button-icon"></i></span>

            <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark services-modal-close"></i>
              <h3 className="services-modal-title">Title</h3>
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

        <div className="service-content">
          <div>
            <i className="fa-solid fa-square-up-right services-icon"></i>
            <h3 className="service-title">Tools<br />I Use</h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(3)}>
            View More<i className="fa-solid fa-arrow-right services-button-icon"></i></span>

            <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark services-modal-close"></i>
              <h3 className="services-modal-title">Title</h3>
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

        <div className="service-content">
          <div>
            <i className="fa-solid fa-square-up-right services-icon"></i>
            <h3 className="service-title">Basic<br />Knowledge</h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(4)}>
            View More<i className="fa-solid fa-arrow-right services-button-icon"></i></span>

            <div className={toggleState === 4 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              <i onClick={() => toggleTab(0)} className="fa-solid fa-xmark services-modal-close"></i>
              <h3 className="services-modal-title">Title</h3>
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
      </div>
    </section>
  );
};

export default Services;
