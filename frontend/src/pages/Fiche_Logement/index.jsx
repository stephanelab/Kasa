import { useParams } from "react-router-dom"
import Slideshow from "../../components/Slideshow"
import Rating from "../../components/Rating"
import Dropdown from "../../components/Dropdown"
import { useState, useEffect } from "react"
import "./styles.scss"
import { TEXTS } from "../../data/texts"

// Récupération des textes utiles depuis le fichier texts.js
const { HOUSING_TITLE1, HOUSING_TITLE2 } = TEXTS

export default function FicheLogement() {
  const { id } = useParams()

  // Récupération des properties sur l'API
  const [property, updateProperty] = useState(null)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/properties/${id}`
        )
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        updateProperty(data)
      } catch (error) {
        console.error("Error fetching property:", error)
      }
    }

    fetchProperty()
  }, [id])

  if (!property) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Slideshow pictures={property.pictures} />
      <div className="housing-header">
        <div className="info">
          <h1 className="info__title">{property.title}</h1>
          <h2 className="info__location">{property.location}</h2>
          <div className="info__tags">
            {property.tags.map((tag, index) => (
              <p className="info__tags__tag" key={index}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="host-rating">
          <div className="host">
            <p className="host__name">{property.host.name}</p>
            <img
              src={property.host.picture}
              alt={property.host.name}
              className="host__picture"
            />
          </div>
          <div className="rating">
            <Rating rate={property.rating} />
          </div>
        </div>
      </div>
      <div className="housing-dropdowns">
        <Dropdown
          className="dropdown__button--housing"
          title={HOUSING_TITLE1}
          content={property.description}
        />
        <Dropdown
          className="dropdown__button--housing"
          title={HOUSING_TITLE2}
          content={
            <ul>
              {property.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  )
}
