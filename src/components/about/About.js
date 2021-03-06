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
            {/* I have equal love for both coding and drawing. Each one offers me
            the chance to be a problem solver with creative solutions. When I'm
            not drawing, I'm turning beautiful designs into websites. Frontend
            development is where I truly thrive.  */}
            I used to be an animator who had a slight interest in web
            development. Over time, it grew to become a passion of mine after
            learning how to build my own websites from scratch! <br /> In order
            to transition myself into the tech industry, I taught myself the
            basics of frontend web development eventually joining and finishing
            Coding Dojo's intensive bootcamp and becoming a fullstack web
            developer!
            {/* "I'm a Frontend Web Developer
            building the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the Projects section. I also like sharing content related to the
            stuff that I have learned over the years in Web Development so it
            can help other people of the Dev Community. Feel free to Connect or
            Follow me on my Linkedin where I post useful content related to Web
            Development and Programming I'm open to Job opportunities where I
            can contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to contact me." */}
            {/* Back in 2020 I graduated from San Francisco State University with a
            degree in Fine Art and Animation, but due to the pandemic, I had to
            retrace my steps and reconsider my situation. I had a very
            introductory experience to coding many years prior but I never
            really delved as deep into it until now. Ever since then, I've been
            hooked to the process of learning and implementing code. Although I
            work primarily solo on most of my current work, I'm no stranger to
            group based projects, so if you'd like to work with me... */}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
