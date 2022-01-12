import React from "react"
import ProfileImg from "../images/Profile-Image.png"
import ProfileImgSmall from "../images/Profile-Image-sm.png"
import {FaHandPointer} from "react-icons/fa"
const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <p>Hello there.</p>
        <h1>
          <span>My name is</span>John Deen Bucog
        </h1>
        <p>I'm a Frontend Developer</p>
      </div>
      <div className="header__right">
        <img
          className="self-portrait"
          srcSet={`${ProfileImg} 250w, ${ProfileImgSmall} 150w`}
          sizes="(max-width: 900px) 150px, 250px"
          alt="self portrait"
        />
      </div>
    </header>
  )
}

export default Header
