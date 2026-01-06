import logo from "../../assets/black_logo.svg"
import "../../styles/styles.scss"

export default function Footer() {
  return (
    <div className="footer">
      <img className="footer__logo" src={logo} alt="KASA Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
