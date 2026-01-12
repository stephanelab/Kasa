import "./styles.scss"
import { TEXTS } from "../../data/texts"

// Récupération des textes utiles depuis le fichier texts.js
const { ERROR_TXT, ERROR_LINK } = TEXTS

export default function Error404() {
  return (
    <div className="error">
      <p className="error__number">404</p>
      <p className="error__txt">{ERROR_TXT}</p>
      <a href="/" className="error__link">
        {ERROR_LINK}
      </a>
    </div>
  )
}
