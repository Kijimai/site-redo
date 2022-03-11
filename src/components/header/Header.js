import React from "react"
import ProfileImg from "../../images/Profile-Image.png"
import ProfileImgSmall from "../../images/Profile-Image-sm.png"
import { FaHandPointer, FaAngleDown } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import headerItem1 from "../../images/Asset-1.svg"
const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <p>Hello there.</p>
        <h1>
          <span>My name is</span>John Deen Bucog
        </h1>
        <p>I'm a Frontend Developer</p>
        <a href="#about">
          Get to know me!
          <IconContext.Provider
            value={{ size: "2em", className: "down-arrow" }}
          >
            <FaAngleDown />
          </IconContext.Provider>
        </a>
      </div>
      <div className="header__right">
        {/* <img
          className="self-portrait"
          srcSet={`${ProfileImg} 250w, ${ProfileImgSmall} 150w`}
          sizes="(max-width: 900px) 150px, 250px"
          alt="self portrait"
        /> */}
        <img
          className="self-portrait"
          src={headerItem1}
          alt="header self portrait"
        />
      </div>
    </header>
  )
}

export default Header
