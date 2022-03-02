import React from "react"
import { useGlobalContext } from "../../utils/context"

const navLinks = ["about", "skills", "projects", "contact"]

const Sidenav = () => {
  const { scrollHeight } = useGlobalContext()

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <nav className={`sidenav ${scrollHeight > 900 && "active"}`}>
      <ul className="sidenav__links flex">
        <li>
          <button className="sidenav__top-btn" onClick={scrollToTop}>
            back to top
          </button>
        </li>
        {navLinks.map((nav, index) => {
          return (
            <li key={index} className="sidenav__list-item">
              <a className="sidenav__link" href={`#${nav}`}>
                {nav}
              </a>
            </li>
          )
        })}
        <li aria-hidden="true" className="list-line"></li>
      </ul>
    </nav>
  )
}

export default Sidenav
