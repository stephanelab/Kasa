import "./styles.scss"

function Banner({ title1, title2, picture }) {
  return (
    <div className="banner">
      <div className="banner__image">
        <img src={picture} alt={`${title1} ${title2}`} />
        <div className="banner__image__text">
          {title1}
          <span className="txt_break">{title2}</span>
        </div>
      </div>
    </div>
  )
}

export default Banner
