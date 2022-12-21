import React from 'react';
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <span className="section-subtitle">An introduction of myself</span>
      <div className="about-container container grid">
        <img src={AboutImg} alt="About" className="about-img" />
        <div className="about-data">
          <Info />
          <p className="about-description">Born in the UK, and living in Japan for over
          a decade, I have made a gradual transition into web development, focusing on both front and back
          end. I welcome you to take a look at my resume, skill set and projects I have worked on.</p>
          <a download="" href={CV} className="button button--flex">Download Resume<i className="fa-regular fa-file-lines"></i></a>
        </div>
      </div>
    </section>
  );
};

export default About;
