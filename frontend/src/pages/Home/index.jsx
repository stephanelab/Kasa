import Banner from "../../components/Banner"
import bannerHome from "../../assets/Image_Banner_Home.png"
import Card from "../../components/Card"

let Home_banner_txt = "Chez vous, partout et ailleurs"

export default function Home() {
  return (
    <div>
      <Banner title={Home_banner_txt} picture={bannerHome} />
      <Card />
    </div>
  )
}
