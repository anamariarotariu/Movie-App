import { useParams } from "react-router-dom";
import apiRequests from "../../../api/apiRequests";
import { useState, useEffect } from "react";
import styling from "./DetailsPage.module.css";
import DetailsCard from "../../DetailsCard/DetailsCard";
function DetailsPage() {
  const [movie, setMovie] = useState(null);
  const [tvShow, setTvShow] = useState(null);
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    setLoading(true);
    apiRequests
      .getMovieInfo(id)
      .then((res) => {
        setMovie(res);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [id]);
  useEffect(() => {
    setLoading(true);
    apiRequests
      .getTvShowInfo(id)
      .then((res) => {
        setTvShow(res);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading && <div className={styling.loading_text}>Loading...</div>}
      {!loading && movie && (
        <DetailsCard
          title={movie.general.title}
          imgSrc={movie.general.poster_path}
          description={movie.general.overview}
          tagline={movie.general.tagline}
          genre={movie.general.genres[1].name}
        ></DetailsCard>
      )}
    </>
  );
}
export default DetailsPage;
