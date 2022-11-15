import Navigator from "../navigator/Navigator"
import Header from "../header/Header"
import About from "../about/About"
import Skills from "../skills/Skills"
import Projects from "../projects/Projects"
import Contact from "../contact/Contact"
import Footer from "../footer/Footer"
import Sidebars from "../sidebars/Sidebars"

const Main = () => {
  return (
    <main>
      <Navigator />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Sidebars />
    </main>
  )
}

export default Main
