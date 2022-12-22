import React from 'react';

const ProjectItems = ({item}) => {
  return (
    <div className="project-card" key={item.id}>
      <img src={item.image} alt="" className="project-img"/>
      <h3 className="project-title">{item.title}</h3>
      <div className="project-links">
        <a href={item.url} className="project-button">
          Demo <i className="fa-solid fa-arrow-right project-button-icon"></i>
        </a>
        <a href={item.gh} className="project-button">
          Source <i className="fa-solid fa-arrow-right project-button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
