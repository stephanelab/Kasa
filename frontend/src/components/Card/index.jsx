import { useState, useEffect } from "react"
import "../../styles/styles.scss"

function Card() {
  const [properties, updateProperties] = useState([])

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/properties")
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        updateProperties(data)
      } catch (error) {
        console.error("Error fetching properties:", error)
      }
    }

    fetchProperties()
  }, [])

  return (
    <div className="card-container">
      {properties.map((property) => (
        <div key={property.id} className="card">
          <img src={property.cover} alt={property.title} />
          <h2>{property.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Card
