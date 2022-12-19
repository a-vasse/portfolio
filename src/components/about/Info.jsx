import React from 'react';

const Info = () => {
  return (
    <div>
      <div className="about-info grid">
        <div className="about-box">
          <i class="fa-solid fa-business-time about-icon"></i>
          <h3 className="about-title">Experience</h3>
          <span className="about-subtitle">15+ Years Working</span>
        </div>
        <div className="about-box">
          <i class="fa-solid fa-language about-icon"></i>
          <h3 className="about-title">Languages</h3>
          <span className="about-subtitle">English - Native<br />Japanese - N3</span>
        </div>
        <div className="about-box">
          <i class="fa-solid fa-location-dot about-icon"></i>
          <h3 className="about-title">Location</h3>
          <span className="about-subtitle">Tokyo, Japan<br />PR Visa</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
