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
          <i class="fa-regular fa-building about-icon"></i>
          <h3 className="about-title">Industries</h3>
          <span className="about-subtitle">Education, IT</span>
        </div>
        <div className="about-box">
          <i class="fa-solid fa-location-dot about-icon"></i>
          <h3 className="about-title">Location</h3>
          <span className="about-subtitle">Tokyo, Japan</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
