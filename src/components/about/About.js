import React from "react"
import headerItem2 from "../../images/fixed.svg"
const About = () => {
  return (
    <section className="section about" id="about">
      <h2 className="about__header">Who am I?</h2>
      <div className="inner-container flex">
        <div className="about__image-container">
          <img
            src={headerItem2}
            alt="about me self portrait"
            className="about__image"
          />
        </div>
        <div className="about__container">
          <p className="about__description">
            I used to be an animator who had a slight interest in web
            development. Over time, it grew to become a passion of mine after
            learning how to build my own websites from scratch! <br /> In order
            to transition myself into the tech industry, I taught myself the
            basics of frontend web development eventually joining and finishing
            Coding Dojo's intensive bootcamp and becoming a web
            developer!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
