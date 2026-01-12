import { useParams } from "react-router-dom"
import Slideshow from "../../components/Slideshow"
import Rating from "../../components/Rating"
import Dropdown from "../../components/Dropdown"
import { useState, useEffect } from "react"
import "./styles.scss"
import { TEXTS } from "../../data/texts"
import { useNavigate } from "react-router"

// Récupération des textes utiles depuis le fichier texts.js
const { HOUSING_TITLE1, HOUSING_TITLE2 } = TEXTS

export default function FicheLogement() {
  const { id } = useParams()

  // Récupération des properties sur l'API
  const [property, updateProperty] = useState(null)

  const navigate = useNavigate()

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
        navigate("/404")
      }
    }

    fetchProperty()
  }, [id, navigate])

  if (!property) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {/* Appel du Slideshow */}
      <Slideshow pictures={property.pictures} />
      <div className="housing-header">
        {/* Information sur le logement */}
        <div className="info">
          <h1 className="info__title">{property.title}</h1>
          <h2 className="info__location">{property.location}</h2>
          <div className="info__tags">
            {/* vu que la propriété tags est un tableau, on map dessus car il y en a plusieurs */}
            {property.tags.map((tag, index) => (
              <p className="info__tags__tag" key={index}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        {/* Information sur l'hôte */}
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
            {/* Appel du composant Rating */}
            <Rating rate={property.rating} />
          </div>
        </div>
      </div>
      <div className="housing-dropdowns">
        {/* Appel des 2 dropdowns */}
        <div className="housing-dropdowns__item">
          <Dropdown
            className="dropdown__button--housing"
            title={HOUSING_TITLE1}
            content={property.description}
          />
        </div>
        <div className="housing-dropdowns__item">
          <Dropdown
            className="dropdown__button--housing"
            title={HOUSING_TITLE2}
            content={
              <ul className="housing-dropdowns__list">
                {/* vu que la propriété equipments est un tableau, on map dessus car il y en a plusieurs et on les met en élément de liste */}
                {property.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  )
}
