import React, { useState } from "react"
import { useGlobalContext } from "../utils/context"
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

const Navigator = () => {
  const navLinks = ["about", "projects", "contact"]

  const { handleNav, navActive, toggleTheme, closeNav, theme } =
    useGlobalContext()

  return (
    <div className="navigator">
      <div className="navigator__btn-container">
        <button
          aria-label="close button"
          onClick={handleNav}
          className={`navigator__btn hamburger hamburger--elastic ${
            navActive && "is-active"
          } `}
          type="button"
        >
          <span aria-hidden="true" className="hamburger-box">
            <span aria-hidden="true" className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <button
        aria-label="theme toggle button"
        className={`navigator__toggle-btn ${navActive && "active"}`}
        onClick={toggleTheme}
      >
        <IconContext.Provider
          value={{ size: "5rem", className: "toggle-btn__icon" }}
        >
          {theme === "toggle-btn" ? <FaLightbulb /> : <FaRegLightbulb />}
        </IconContext.Provider>
      </button>
      <nav className="nav">
        <ul className="nav__nav-links">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <a className="nav__link" href={`#${link}`}>
                  {link}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Navigator
