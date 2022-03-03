import React from "react"
import {} from "react-icons/fa"
import { useGlobalContext } from "../../utils/context"
const Sidecontact = () => {
  const { scrollHeight } = useGlobalContext()

  return (
    <div className={`side-contact ${scrollHeight > 900 && "active"}`}>
      <a title="Send me an email" href="mailto:jdbucog@yahoo.com">
        Contact me!
      </a>
      <div className="list-line"></div>
    </div>
  )
}

export default Sidecontact
