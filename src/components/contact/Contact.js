import React, { useState } from "react"

const Contact = () => {
  const [] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
  } 

  return (
    <section className="section contact" id="contact">
      <div className="inner-container">
        <h2 className="contact__header">Contact Me</h2>
        <div className="contact__form-container flex">
          <form action="#" className="contact__form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input required id="name" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input required id="email" type="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea required name="message" id="message"></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
