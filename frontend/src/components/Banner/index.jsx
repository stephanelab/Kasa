import "./styles.scss"

function Banner({ title, picture }) {
  return (
    <div className="banner">
      <div className="banner__image">
        <img src={picture} alt={title} />
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Banner
