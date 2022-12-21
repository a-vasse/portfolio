import React from 'react';

const ProjectItems = ({item}) => {
  return (
    <div className="projects-card" key={item.id}>
      <img src={item.image} alt="" className="projects-img"/>
      <h3 className="projects-title">{item.title}</h3>
      <a href="#" className="projects-button">
        Demo <i className="fa-solid fa-arrow-right projects-button-icon"></i>
      </a>
    </div>
  );
};

export default ProjectItems;
