import React from 'react'
import project from "../data/project.json"
import "./project.css"
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className='body1' id='project'>
      <section className='container22'>
        <h2 className='title23'>Project</h2>
        <div className='project22'>
          {
            project.map((project,id)=>{
              return (
                <ProjectCard key={id} project={project} />
              );
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Project
