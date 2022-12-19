import React from 'react';

const Services = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Abilities</span>
        <div className="services-container container grid">
          <div className="services-content">
            <i className="icon"></i>
            <h3 className="services-title"></h3>
          </div>
          <span className="services-button">View Details{" "}<i className="fa-solid fa-arrow-right services-button"></i></span>
          <div className="services-modal">
            <div className="services-modal-content">
              <i className="fa-solid fa-xmark services-modal-close"></i>
              <h3 className="services-modal-title"></h3>
              <p className="services-modal-description"></p>
              <ul className="services-modal-services grid">
                <li className="services-modal-skills">
                  <i className="devicon-rails-plain services-modal-icon"></i>
                  <p className="services-modal-info">HTML</p>
                </li>
                <li className="services-modal-skills">
                  <i className="devicon-rails-plain services-modal-icon"></i>
                  <p className="services-modal-info">CSS</p>
                </li>
                <li className="services-modal-skills">
                  <i className="devicon-rails-plain services-modal-icon"></i>
                  <p className="services-modal-info">Bootstrap</p>
                </li>
                <li className="services-modal-skills">
                  <i className="devicon-rails-plain services-modal-icon"></i>
                  <p className="services-modal-info">Javascript</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Services;
