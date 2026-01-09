import ActiveStar from "../../assets/active_star_icon.svg"
import InactiveStar from "../../assets/inactive_star_icon.svg"
import "./styles.scss"

function Rating({ rate }) {
  const totalStars = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {totalStars.map((starIndex) =>
        starIndex <= rate ? (
          <img key={starIndex} src={ActiveStar} alt="Étoile active" />
        ) : (
          <img key={starIndex} src={InactiveStar} alt="Étoile inactive" />
        )
      )}
    </div>
  )
}

export default Rating
