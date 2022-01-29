import React from "react"
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa"
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="inner-container flex">
        <div className="footer__top flex">
          <div className="footer__top-left flex">
            <h3>John Deen Bucog</h3>
            <p className="description">
              Frontend Web Developer based in Sacramento.
            </p>
          </div>
          <div className="footer__top-right flex">
            <h3>Other Links</h3>
            <ul className="links flex">
              <li>
                <a
                  title="Github"
                  href="https://github.com/Kijimai"
                  rel="noopenner noreferrer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/jdbucog/"
                  rel="noopenner noreferrer"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  title="Codepen"
                  href="https://codepen.io/Kijimai"
                  rel="noopenner noreferrer"
                  target="_blank"
                >
                  <FaCodepen />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div>
            <small>&copy; Copyright {currentYear}</small>
            <p>
              Site lovingly made by me. &nbsp;
              <a
                title="Personal github profile"
                href="https://github.com/Kijimai"
                rel="noopenner noreferrer"
                target="_blank"
              >
                John Deen Bucog
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
