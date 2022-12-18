import React from 'react';

const Intro = () => {
  return (
    <div className="home-intro">
      <h1 className="home-title">Alexander Vasse</h1>
      <h3 className="home-subtitle">Full Stack Web Developer</h3>
      <p className="home-description">Developer residing just outside Tokyo. Ruby on Rails | Javascript | HTML/CSS</p>
      <a href="#contact" className="contact button button--flex">Contact Me<i class="fa-regular fa-comments"></i></a>
    </div>
  );
};

export default Intro;
