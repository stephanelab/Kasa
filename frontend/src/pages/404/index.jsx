import "./styles.scss"

export default function Error404() {
  return (
    <div className="error">
      <p className="error__number">404</p>
      <p className="error__txt">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <a href="/" className="error__link">
        Retourner sur la page d’accueil
      </a>
    </div>
  )
}
