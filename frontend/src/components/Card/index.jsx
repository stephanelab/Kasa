import "./styles.scss"

function Card({ property }) {
  return (
    <div className="card">
      <img src={property.cover} alt={property.title} />
      <h2>{property.title}</h2>
    </div>
  )
}

export default Card
