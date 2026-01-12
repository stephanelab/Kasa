import { useState } from "react"
import Open from "../../assets/icon_open.svg"
import Close from "../../assets/icon_close.svg"
import "./styles.scss"

function Dropdown({ title, content, className }) {
  const [isOpen, setIsOpen] = useState(false)
  return isOpen ? (
    // Affichage du dropdown ouvert
    <div className="dropdown">
      <button className={`dropdown__button ${className || ""}`}>
        {title}
        <img
          className="dropdown__icon--open"
          src={Open}
          onClick={() => setIsOpen(false)}
        ></img>
      </button>
      <div className="dropdown__content">{content}</div>
    </div>
  ) : (
    // Affichage du dropdown fermé
    <div className="dropdown">
      <button className={`dropdown__button ${className || ""}`}>
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
