import Banner from "../../components/Banner"
import bannerHome from "../../assets/Image_Banner_Home.png"
import Card from "../../components/Card"
import { TEXTS } from "../../data/texts"
import { useState, useEffect } from "react"
import "./styles.scss"
import { Link } from "react-router-dom"

// Récupération des textes utiles depuis le fichier texts.js
const { HOME_BANNER1, HOME_BANNER2 } = TEXTS

export default function Home() {
  // Récupération des properties sur l'API
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
    <div>
      {/* Appel de la bannière */}
      <Banner
        title1={HOME_BANNER1}
        title2={HOME_BANNER2}
        picture={bannerHome}
      />
      <div className="card-container">
        {/* Mappage des propriétés pour afficher chaque carte (appel du composant Card pour chaque property) */}
        {properties.map((property) => (
          // Ajout d'un lien vers la page de la fiche logement
          <Link to={`logement/${property.id}`} key={property.id}>
            <Card key={property.id} property={property} />
          </Link>
        ))}
      </div>
    </div>
  )
}
