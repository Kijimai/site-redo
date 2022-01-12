import React from "react"
import { useGlobalContext } from "../utils/context"
const NavBurger = () => {
  const { handleNav, navActive } = useGlobalContext()
  return (
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
  )
}

export default NavBurger
