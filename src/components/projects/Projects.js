import React from "react"
import projects from "../../data/projects"
const Projects = () => {
  return (
    <section className="section section-projects">
      {projects.map((project, index) => {
        return (
          <article className="project">
            <div className="project__img-container">
              <img
                src={project.imgUrl}
                alt={project.title}
                className="project__img"
              />
            </div>
            <div className="project__contents">
              <h2 className="project__title">{project.title}</h2>
              <p className="project__description">{project.description}</p>
              <div className="project__links">
                <a href={project.liveUrl}>Live Site</a>
                <a href={project.codeUrl}>View Code</a>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Projects
