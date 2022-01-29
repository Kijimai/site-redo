import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="inner-container flex">
        <div className="footer__top">
        
          <h3 className="site-name">John Deen Bucog</h3>
          <p className="description">
            Frontend Web Developer based in Sacramento.
          </p>
        </div>
        <div className="footer__bottom">
          <small>&copy; Copyright {currentYear}</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
