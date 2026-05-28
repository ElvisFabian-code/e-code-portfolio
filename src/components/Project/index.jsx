import React from 'react'
import ProjectCard from "../../ui/ProjectCard"
import "./Project.css"
import {projects} from "../../data" 

const Project = () => {
  return (
    <section id="projects">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Projects</h2>
        </div>
        <div className="projects__container">
          {projects.map((project, index) => (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={index}
              className="project__card__wrapper"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ProjectCard {...project} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project