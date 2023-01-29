import React from 'react';

const Intro = () => {
  return (
    <div className="home-intro">
      <svg width="120%" height="40%">
        <text x="45%" y="60%" textAnchor="middle">Alexander Vasse</text>
      </svg>
      <h3 className="home-subtitle">Web Developer</h3>
      <p className="home-description">Developer based in Tokyo. Ruby on Rails | React.js | Javascript | HTML/CSS</p>
      <a href="#contact" className="button button--flex">Contact Me<i className="fa-regular fa-comments"></i></a>
      <ul className="icon-wrapper">
        <a href="http://www.linkedin.com/in/alexandervasse" rel="noopener noreferrer" target="_blank">
          <li className="icon linkedin"><span className="tooltip">LinkedIn</span>
          <i className="fab fa-linkedin"></i>
        </li></a>
        <a href="http://www.github.com/a-vasse" rel="noopener noreferrer" target="_blank">
          <li className="icon github"><span className="tooltip">Github</span>
          <i className="fab fa-github"></i>
        </li></a>
        <a href="http://www.instagram.com/usagishashin" rel="noopener noreferrer" target="_blank">
          <li className="icon instagram"><span className="tooltip">Instagram</span>
          <i className="fab fa-instagram"></i>
        </li></a>
      </ul>
    </div>
  );
};

export default Intro;
