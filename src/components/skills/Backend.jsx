import React from 'react';

const Backend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Backend Development</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i class="icon devicon-ruby-plain"></i>
            <div>
              <h3 className="skills-name">Ruby</h3>
            </div>
          </div>
          <div className="skills-data">
            <i class="icon devicon-rails-plain"></i>
            <div>
              <h3 className="skills-name">Rails</h3>
            </div>
          </div>
          <div className="skills-data">
            <i class="icon devicon-mysql-plain"></i>
            <div>
              <h3 className="skills-name">MySQL</h3>
            </div>
          </div>
          <div className="skills-data">
            <i class="icon devicon-postgresql-plain"></i>
            <div>
              <h3 className="skills-name">PostgreSQL</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
