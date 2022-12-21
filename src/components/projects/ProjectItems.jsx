import React from 'react';

const ProjectItems = ({item}) => {
  return (
    <div className="project-card" key={item.id}>
      <img src={item.image} alt="" className="project-img"/>
      <h3 className="project-title">{item.title}</h3>
      <a href="#" className="project-button">
        Demo <i className="fa-solid fa-arrow-right project-button-icon"></i>
      </a>
    </div>
  );
};

export default ProjectItems;
