import logo from "../../assets/logo.svg"
import "./styles.scss"
import { TEXTS } from "../../data/texts"
import { NavLink } from "react-router-dom"

const { HEADER_HOME, HEADER_ABOUT } = TEXTS

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="KASA Logo" />
      <nav className="header__nav">
        <NavLink // Utilisation de Navlink afin de pouvoir utiliser la propriété isActive pour styliser le lien actif
          to="/"
          end
          className={({ isActive }) =>
            `header__navLink ${isActive ? "header__navLink--underline" : ""}`
          }
        >
          {HEADER_HOME}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `header__navLink ${isActive ? "header__navLink--underline" : ""}`
          }
        >
          {HEADER_ABOUT}
        </NavLink>
      </nav>
    </div>
  )
}
