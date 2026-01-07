import Banner from "../../components/Banner"
import bannerHome from "../../assets/Image_Banner_Home.png"
import Card from "../../components/Card"
import { TEXTS } from "../../data/texts"
import { useState, useEffect } from "react"
import "./styles.scss"

const { HOME_BANNER } = TEXTS

export default function Home() {
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
      <Banner title={HOME_BANNER} picture={bannerHome} />
      <div className="card-container">
        {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
