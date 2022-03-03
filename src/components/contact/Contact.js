import React, { useState } from "react"
// import { useGlobalContext } from "../../utils/context"

const Contact = () => {
  // const { handleContactSubmit, mailMessage, handleContactChange } =
  //   useGlobalContext()

  const [mailMessage, setMailMessage] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleContactSubmit = (e) => {
    const name = e.target[0].value
    const email = e.target[1].value
    const message = e.target[2].value
    e.preventDefault()
    if (name !== "" && email !== "" && message !== "") {
      console.log(e)
      console.log("Submitted", name, email, message)
      return
    }
    console.log("error")
    return
  }

  const handleContactChange = (e) => {
    const { value } = e.target
    setMailMessage((previousValue) => {
      return { ...previousValue, value }
    })
    console.log(mailMessage)
  }

  return (
    <section className="section contact" id="contact">
      <div className="inner-container">
        <h2 className="contact__header">Contact Me</h2>
        <p className="contact__description">
          I love working with others so any opportunity to do so is very
          welcome! Send me a message and we can talk about something together.
        </p>
        <div className="contact__form-container flex">
          <form
            action="#"
            className="contact__form"
            onSubmit={handleContactSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                required
                id="name"
                type="text"
                onChange={handleContactChange}
                value={mailMessage.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                required
                id="email"
                type="email"
                value={mailMessage.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                required
                name="message"
                id="message"
                value={mailMessage.message}
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
