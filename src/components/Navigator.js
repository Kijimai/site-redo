import React, { useState } from "react"
import { useGlobalContext } from "../utils/context"
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import NavBurger from "./NavBurger"

const Navigator = () => {
  const navLinks = ["about", "skills", "projects", "contact"]

  const { navActive, toggleTheme, closeNav, theme } = useGlobalContext()

  return (
    <div className="navigator">
      <div className="navigator__btn-container">
        <NavBurger />
      </div>
      <button
        aria-label="theme toggle button"
        className={`navigator__toggle-btn`}
        onClick={toggleTheme}
      >
        <IconContext.Provider
          value={{ size: "5rem", className: "navigator__toggle-btn__icon" }}
        >
          {theme === "dark-theme" ? <FaLightbulb /> : <FaRegLightbulb />}
        </IconContext.Provider>
      </button>
      <nav className={`nav ${navActive && "active"}`}>
        <ul className="nav__nav-links">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <a className="nav__link" href={`#${link}`} onClick={closeNav}>
                  {link}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="nav__social-links"></ul>
      </nav>
    </div>
  )
}

export default Navigator
