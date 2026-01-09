import Left_arrow from "../../assets/left_arrow_icon.svg"
import Right_arrow from "../../assets/right_arrow_icon.svg"
import "./styles.scss"
import { useState } from "react"

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt="Slideshow"
        className="slideshow__image"
      />
      <img
        src={Left_arrow}
        alt="Image précédente"
        className="slideshow__leftarrow"
        onClick={() =>
          setCurrentIndex(
            currentIndex > 0 ? currentIndex - 1 : pictures.length - 1
          )
        }
      />
      <img
        src={Right_arrow}
        alt="Image suivante"
        className="slideshow__rightarrow"
        onClick={() =>
          setCurrentIndex(
            currentIndex < pictures.length - 1 ? currentIndex + 1 : 0
          )
        }
      />
      <p className="slideshow__counter">
        {currentIndex + 1}/{pictures.length}
      </p>
    </div>
  )
}
