import "./styles.scss"

function Card({ property }) {
  return (
    <div className="card">
      <img className="card__image" src={property.cover} alt={property.title} />
      <p className="card__title">{property.title}</p>
    </div>
  )
}

export default Card
