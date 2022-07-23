import React from "react"
import projects from "../../data/projects"

const Projects = () => {
  return (
    <section className="section section-projects projects" id="projects">
      <h2 className="projects__header">Featured Project</h2>
      <div className="inner-container featured-project-container">
        <article className="featured-project project">
          <div className="project__img-container">
            <img
              style={{ filter: "blur(3px)" }}
              src="https://www.flexx.co/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
              alt="Not found"
              className="project__img"
            />
          </div>
          <div className="project__contents">
            <h2 className="project__title">Design Deliver</h2>
            <p style={{ color: "white", fontFamily: "sans-serif" }}>
              (Work in Progress)
            </p>
            <p className="project__description">
              Design Deliver is a full-stack MERN application made for digital
              artists and prospective employers to easily find one another for
              collaboration. The site's frontend is deployed through Netlify and
              the backend is deployed through Heroku. Both parts utilize
              continuous integration via Github and Heroku.
            </p>
            <ul className="project__tech-stacks">
              <li className="stack">Mongoose/MongoDB</li>
              <li className="stack">Express</li>
              <li className="stack">React</li>
              <li className="stack">Node</li>
            </ul>
            <div className="project__links">
              <a
                className="project__link"
                href="https://design-deliver.netlify.app/"
                target="_blank"
                rel="noreferrer noopenner"
                disabled
              >
                Live Site
              </a>
            </div>
          </div>
        </article>
      </div>
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
