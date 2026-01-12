import logo from "../../assets/black_logo.svg"
import "./styles.scss"
import { TEXTS } from "../../data/texts"

const { FOOTER_LEGAL1, FOOTER_LEGAL2 } = TEXTS

export default function Footer() {
  return (
    <div className="footer">
      <img className="footer__logo" src={logo} alt="KASA Logo" />
      <p>
        {FOOTER_LEGAL1}
        <span className="footer__legal">{FOOTER_LEGAL2}</span>
      </p>
    </div>
  )
}
