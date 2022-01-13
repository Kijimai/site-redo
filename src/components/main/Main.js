import React from "react"
import Navigator from "../navigator/Navigator"
import Header from "../header/Header"
import About from "../about/About"
import Projects from "../projects/Projects"
const Main = () => {
  return (
    <main>
      <Navigator />
      <Header />
      <About />
      <Projects />
    </main>
  )
}

export default Main
