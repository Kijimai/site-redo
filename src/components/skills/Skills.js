import React from "react"
import { FaCode, FaBookOpen } from "react-icons/fa"

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="skills__header">My Skillset</h2>
      <div className="inner-container">
        <div className="skills__container">
          <FaCode />
          <h3>Languages</h3>
          <ul className="skills__list">
            <li className="skills__skill">HTML5</li>
            <li className="skills__skill">CSS/SCSS</li>
            <li className="skills__skill">Javascript ES6+</li>
            <li className="skills__skill">ReactJS</li>
          </ul>
        </div>
        <div aria-hidden="true" className="divider"></div>
        <div className="skills__container">
          <FaBookOpen />
          <h3>Dev Tools</h3>
          <ul className="skills__list">
            <li className="skills__skill">NPM</li>
            <li className="skills__skill">Git/Github</li>
            <li className="skills__skill">Postman</li>
            <li className="skills__skill">Codepen/Codesandbox</li>
            <li className="skills__skill">Figma/Photoshop</li>
            <li className="skills__skill">Visual Studio Code</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
