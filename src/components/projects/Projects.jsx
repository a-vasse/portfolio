import React from 'react';
import Project from './Project';
import "./projects.css"

const Projects = () => {
  return (
    <section className="projects section" id="projects">
    <h2 className="section-title">Projects</h2>
    <span className="section-subtitle">A series of sites and apps I have worked on.</span>
    <Project />
    </section>
  );
};

export default Projects;
