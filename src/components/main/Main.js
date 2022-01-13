import React from "react"
import Navigator from "../navigator/Navigator"
import Header from "../header/Header"
import About from "../about/About"
import Skills from "../skills/Skills"
import Projects from "../projects/Projects"
const Main = () => {
  return (
    <main>
      <Navigator />
      <Header />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}

export default Main
