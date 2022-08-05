import detailsCardStyling from "./DetailsCard.module.css";
function DetailsCard(props) {
  const imageUrl = "http://image.tmdb.org/t/p/w500";
  const imageId = props.imgSrc;
  let imageSrc = `${imageUrl}/${imageId}`;
  return (
    <div className={detailsCardStyling.details_card}>
      <div className={detailsCardStyling.image_container}>
        <img src={imageSrc} alt="img" />{" "}
      </div>
      <div className={detailsCardStyling.text_details}>
        <div className={detailsCardStyling.title}> {props.title}</div>
        <div className={detailsCardStyling.tagline}>{props.tagline} </div>
        <div> {props.genre}</div>
        <div className={detailsCardStyling.description}>
          {" "}
          {props.description}
        </div>

       
      </div>
    </div>
  );
}
export default DetailsCard;
