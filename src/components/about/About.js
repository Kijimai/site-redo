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
            I am a former animator turned web developer and I love making
            websites.
          </p>
          <p className="about__description">
            I also graduated from Coding Dojo's fullstack web developer program
            earning the highest honors in the MERN stack and C# / .NET6.
          </p>
          <p className="about__description">
            I am looking for my first role as a junior developer where I can
            learn, grow and contribute to the company. If you are interested in
            working with me, feel free to
            <b>
              &nbsp;
              <a className="about__contact-link" href="#contact">
                <u>contact</u>
              </a>
              &nbsp;
            </b>
            me!
          </p>
          <br />
          {/* <a href="mailto:jdbucog@yahoo.com" className="about__contact-link">
            Contact
          </a> */}
        </div>
      </div>
    </section>
  )
}

export default About
