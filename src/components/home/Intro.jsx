import React from 'react';

const Intro = () => {
  return (
    <div className="home-intro">
      <svg width="120%" height="40%">
        <text x="45%" y="60%"  text-anchor="middle">Alexander Vasse</text>
      </svg>
      <h3 className="home-subtitle">Full Stack Web Developer</h3>
      <p className="home-description">Developer residing just outside Tokyo. Ruby on Rails | Javascript | HTML/CSS</p>
      <a href="#contact" className="button button--flex">Contact Me<i class="fa-regular fa-comments"></i></a>
      <ul class="icon-wrapper">
        <a href="http://www.linkedin.com/in/alexandervasse" rel="noopener noreferrer" target="_blank">
          <li class="icon linkedin"><span class="tooltip">LinkedIn</span>
          <i class="fab fa-linkedin"></i>
        </li></a>
        <a href="http://www.github.com/a-vasse" rel="noopener noreferrer" target="_blank">
          <li class="icon github"><span class="tooltip">Github</span>
          <i class="fab fa-github"></i>
        </li></a>
        <a href="http://www.instagram.com/usagishashin" rel="noopener noreferrer" target="_blank">
          <li class="icon instagram"><span class="tooltip">Instagram</span>
          <i class="fab fa-instagram"></i>
        </li></a>
      </ul>
    </div>
  );
};

export default Intro;
