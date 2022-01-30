import React from "react"
import {} from "react-icons/fa"
import { useGlobalContext } from "../../utils/context"
const Sidecontact = () => {
  const { scrollHeight } = useGlobalContext()
  return (
    <div className="side-contact">
      <div className="list-line"></div>
    </div>
  )
}

export default Sidecontact
