import React from "react"
import Navigator from "../navigator/Navigator"
import Header from "../header/Header"
import About from "../about/About"
import Skills from "../skills/Skills"
import Projects from "../projects/Projects"
import Contact from "../contact/Contact"

const Main = () => {
  return (
    <main>
      <Navigator />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default Main
