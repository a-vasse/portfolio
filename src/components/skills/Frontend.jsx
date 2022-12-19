import React from 'react';

const Frontend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend Developer</h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i class="icon fa-brands fa-html5"></i>
            <div>
              <h3 className="skills-name">HTML</h3>
            </div>
          </div>

          <div className="skills-data">
            <i class="icon fa-brands fa-css3-alt"></i>
            <div>
              <h3 className="skills-name">CSS</h3>
            </div>
          </div>

          <div className="skills-data">
            <i class="icon fa-brands fa-square-js"></i>
            <div>
              <h3 className="skills-name">Javascript</h3>
            </div>
          </div>

          <div className="skills-data">
            <i class="icon fa-brands fa-react"></i>
            <div>
              <h3 className="skills-name">React</h3>
            </div>
          </div>

          <div className="skills-data">
            <i class="icon fa-brands fa-bootstrap"></i>
            <div>
              <h3 className="skills-name">Bootstrap</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
