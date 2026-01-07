import { useState } from "react"
import Open from "../../assets/icon_open.svg"
import Close from "../../assets/icon_close.svg"
import "./styles.scss"

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  return isOpen ? (
    <div className="dropdown">
      <button className="dropdown__button">
        {title}
        <img
          className="dropdown__icon--open"
          src={Open}
          onClick={() => setIsOpen(false)}
        ></img>
      </button>
      <div className="dropdown__content">
        <p>{content}</p>
      </div>
    </div>
  ) : (
    <div className="dropdown">
      <button className="dropdown__button">
        {title}
        <img
          className="dropdown__icon--close"
          src={Close}
          onClick={() => setIsOpen(true)}
        ></img>
      </button>
    </div>
  )
}

export default Dropdown
