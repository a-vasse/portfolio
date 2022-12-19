import React from 'react';

const Basic = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Basic Knowledge</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i class="icon devicon-java-plain"></i>
            <div>
              <h3 className="skills-name">Java</h3>
            </div>
          </div>
          <div className="skills-data">
            <i class="icon devicon-python-plain"></i>
            <div>
              <h3 className="skills-name">Python</h3>
            </div>
          </div>
          <div className="skills-data">
            <i class="icon devicon-nodejs-plain"></i>
            <div>
              <h3 className="skills-name">Node.js</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
