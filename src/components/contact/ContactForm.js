import React from "react"

const ContactForm = () => {
  return (
    <form>
      <fieldset id="fs-frm-inputs">
        <label for="full-name">Full Name</label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required=""
        />
        <label for="email-address">Email Address</label>
        <input
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="email@domain.tld"
          required=""
        />
        <label for="message">Message</label>
        <textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
          required=""
        ></textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default ContactForm
