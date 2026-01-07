import logo from "../../assets/logo.svg"
import "./styles.scss"

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="KASA Logo" />
      <nav className="header__nav">
        <a href="/">Accueil</a>
        <a href="/about">A Propos</a>
      </nav>
    </div>
  )
}
