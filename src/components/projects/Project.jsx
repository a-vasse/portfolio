import React, { useState, useEffect } from 'react';
import { projectsData } from './ProjectData';
import { projectsNav } from './ProjectData';
import ProjectItems from './ProjectItems';

const Project = () => {
  const [item, setItem] = useState({name: "all"});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if(item.name === "all") {
      setProjects(projectsData);
    }
    else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (event, index) => {
    setItem({name: event.target.textContent });
  };

  return (
    <div>
      <div className="projects-filters">
        {projectsNav.map((item, index) => {
          return (
            <span onClick={(event) => {
              handleClick(event, index);
            }}

            className="projects-item" key={index} >{item.name}</span>
          );
        })}
      </div>

      <div className="projects-container container grid">
        {projects.map((item) => {
          return <ProjectItems item={item} key={item.id}/>
        })}
      </div>
    </div>
  );
};

export default Project;
