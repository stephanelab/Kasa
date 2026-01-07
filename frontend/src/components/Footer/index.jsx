import logo from "../../assets/black_logo.svg"
import "./styles.scss"
import { TEXTS } from "../../data/texts"

const { FOOTER_LEGAL } = TEXTS

export default function Footer() {
  return (
    <div className="footer">
      <img className="footer__logo" src={logo} alt="KASA Logo" />
      <p>{FOOTER_LEGAL}</p>
    </div>
  )
}
