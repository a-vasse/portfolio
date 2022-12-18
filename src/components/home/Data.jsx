import React from 'react';

const Data = () => {
  return (
    <div>
      <div className="home-data">
        <h1 className="home-title">Alexander Vasse
        </h1>
        <h3 className="home-subtitle">Full Stack Web Developer</h3>
        <p className="home-description text-dark">Full stack web developer residing just outside Tokyo. Ruby on Rails | Javascript | HTML/CSS</p>
        <div class="d-flex gap-3">
          <div class="mt-2">
          <a href="#contact" className="btn btn-primary p-3">
            Contact Me <i class="fa-regular fa-comments"></i>
          </a>
          </div>
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
      </div>
    </div>
  );
};

export default Data;
