import React from 'react';

const Backend = () => {
  return (
    <div className="basicskills-content">
      <h3 className="basicskills-title">Backend Development</h3>
      <div className="basicskills-box">
        <div className="basicskills-group">
          <div className="basicskills-data">
            <i class="icon devicon-ruby-plain"></i>
            <div>
              <h3 className="basicskills-name">Ruby</h3>
            </div>
          </div>
          <div className="basicskills-data">
            <i class="icon devicon-rails-plain"></i>
            <div>
              <h3 className="basicskills-name">Rails</h3>
            </div>
          </div>
          <div className="basicskills-data">
            <i class="icon devicon-mysql-plain"></i>
            <div>
              <h3 className="basicskills-name">MySQL</h3>
            </div>
          </div>
          <div className="basicskills-data">
            <i class="icon devicon-postgresql-plain"></i>
            <div>
              <h3 className="basicskills-name">PostgreSQL</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
