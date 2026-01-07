import Banner from "../../components/Banner"
import bannerAbout from "../../assets/Image_Banner_About.png"
import Dropdown from "../../components/Dropdown"
import "./styles.scss"
import { TEXTS } from "../../data/texts"

// Récupération des textes utiles depuis le fichier texts.js
const {
  ABOUT_TITLE1,
  ABOUT_CONTENT1,
  ABOUT_TITLE2,
  ABOUT_CONTENT2,
  ABOUT_TITLE3,
  ABOUT_CONTENT3,
  ABOUT_TITLE4,
  ABOUT_CONTENT4,
} = TEXTS

export default function About() {
  return (
    <div className="about">
      <Banner title="" picture={bannerAbout} />
      <Dropdown title={ABOUT_TITLE1} content={ABOUT_CONTENT1} />
      <Dropdown title={ABOUT_TITLE2} content={ABOUT_CONTENT2} />
      <Dropdown title={ABOUT_TITLE3} content={ABOUT_CONTENT3} />
      <Dropdown title={ABOUT_TITLE4} content={ABOUT_CONTENT4} />
    </div>
  )
}
