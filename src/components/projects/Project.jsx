import React from 'react';
import { projectsData } from './ProjectData';
import { projectsNav } from './ProjectData';
import ProjectItems from './ProjectItems';

const Project = () => {
  return (
    <div>
      <div className="projects-filters">
        {projectsNav.map((item, index) => {
          return (
            <span className="projects-item" key={index} >{item.name}</span>
          )
        })}
      </div>

      <div className="projects-container container grid">
        {projectsData.map((item) => {
          return <ProjectItems item={item} key={item.id}/>
        })}
      </div>
    </div>
  );
};

export default Project;
