import cardStyling from "./Card.module.css";
import { useNavigate } from "react-router-dom";
function MovieCard(props) {
  const navigate = useNavigate();
  const imageUrl = "http://image.tmdb.org/t/p/w500";
  const imageId = props.posterPath;
  let imageSrc = `${imageUrl}/${imageId}`;
  return (
    <div className={cardStyling.card}>
      <div className={cardStyling.img_container}>
        <img src={imageSrc} alt="poster" />
      </div>
      <p> {props.title}</p>
      <button
        className={cardStyling.btn}
        onClick={() => navigate(`/show/${props.id}`)}
      >
        {" "}
        View details{" "}
      </button>
    </div>
  );
}
export default MovieCard;
