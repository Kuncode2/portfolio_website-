import React from "react";
import "./projectcard.css";

const ProjectCard = ({
  project: { title, description, imageSrc, skills, Demo, source },
}) => {
  return (
    <div className="container12">
      <img src={imageSrc} alt={`Image of ${title}`} 
      className="image12"/>
      <h3 className="title12">{title}</h3>
      <p className="description12">{description}</p>
      <ul className="skills12">
        {skills.map((skill, id) => {
          return(
          <li key={id} className="skill12">{skill}
          </li>
          )
        })}
      </ul>
      <div className="links12">
        <a href={Demo} className="link12">Demo</a>
        <a href={source} className="link12">Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
