import React from "react"
import { FaCode, FaBookOpen } from "react-icons/fa"

const lnf = [
  "HTML5",
  "CSS/SCSS",
  "Javascript ES6+",
  "ReactJS",
  "Node / Express",
  "Mongoose",
  "Python / Flask",
  "C# / .NET 6",
]

const devTools = [
  "NPM",
  "Git/Github",
  "Postman",
  "Heroku",
  "Netlify",
  "AWS",
  "Figma/Photoshop",
  "Visual Studio Code",
  "MySQL Workbench",
]

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="skills__top">
        <h2 className="skills__header">My Skillset</h2>
        <p className="skills__description">
          I'm always trying to learn something new, so as time goes on this list
          will expand with my ever increasing skillset.
        </p>
      </div>
      <div className="inner-container">
        <div className="skills__container">
          <FaCode />
          <h3>Languages & Frameworks</h3>
          <ul className="skills__list">
            {lnf.map((skill, index) => {
              return (
                <li key={index} className="skills_skill">
                  {skill}
                </li>
              )
            })}
          </ul>
        </div>
        <div aria-hidden="true" className="divider"></div>
        <div className="skills__container">
          <FaBookOpen />
          <h3>Dev Tools</h3>
          <ul className="skills__list">
            {devTools.map((tool, index) => {
              return (
                <li key={index} className="skills__skill">
                  {tool}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
