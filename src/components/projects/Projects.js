import React from "react"
import projects from "../../data/projects"

const Projects = () => {
  return (
    <section className="section section-projects projects" id="projects">
      <h2 className="projects__header">Projects</h2>
      <div className="inner-container">
        {projects.map((project, index) => {
          return (
            <article key={index} className="project" tabindex="0">
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
                <ul className="project__tech-stacks">
                  {project.stack.map((item, index) => (
                    <li key={index} className="stack">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="project__links">
                  <a
                    className="project__link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopenner"
                  >
                    Live Site
                  </a>
                  <a
                    className="project__link"
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer noopenner"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
