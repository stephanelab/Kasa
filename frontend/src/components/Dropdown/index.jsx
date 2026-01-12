import { useState } from "react"
import Open from "../../assets/icon_open.svg"
import Close from "../../assets/icon_close.svg"
import "./styles.scss"

function Dropdown({ title, content, className }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    // Affichage du dropdown
    <div className={`dropdown ${isOpen ? "dropdown--opened" : ""}`}>
      <button className={`dropdown__button ${className || ""}`}>
        {title}
        <img
          className="dropdown__icon--open"
          src={isOpen ? Open : Close}
          onClick={() => setIsOpen(!isOpen)}
        ></img>
      </button>
      <div className="dropdown__content">{content}</div>
    </div>
  )
}

export default Dropdown
