import React from 'react';

const Basic = () => {
  return (
    <div className="basicskills-content">
      <h3 className="basicskills-title">Basic Knowledge</h3>
      <div className="basicskills-box">
        <div className="basicskills-group">
          <div className="basicskills-data">
            <i className="icon devicon-java-plain"></i>
            <div>
              <h3 className="basicskills-name">Java</h3>
            </div>
          </div>
          <div className="basicskills-data">
            <i className="icon devicon-python-plain"></i>
            <div>
              <h3 className="basicskills-name">Python</h3>
            </div>
          </div>
          <div className="basicskills-data">
            <i className="icon devicon-nodejs-plain"></i>
            <div>
              <h3 className="basicskills-name">Node.js</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
