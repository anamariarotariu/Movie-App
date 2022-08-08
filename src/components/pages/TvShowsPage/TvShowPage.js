import { useEffect, useState } from "react";
import Card from "../../Card/Card";
import apiRequests from "../../../api/apiRequests";
import styling from "../MoviesPage/MoviesPage.module.css";

function TvShowPage() {
  const [actionTvShows, setActionTvShow] = useState([]);
  const [animationTvShows, setAnimationTvShow] = useState([]);
  const [comedyTvShows, setComedyTvShow] = useState([]);
  const [crimeTvShows, setCrimeTvShow] = useState([]);
  const [dramaTvShows, setDramaTvShow] = useState([]);
  useEffect(() => {
    apiRequests
      .getTvShowsByGenre(10759)
      .then((res) => setActionTvShow(res))
      .catch((error) => {
        console.log(error);
      });
    apiRequests
      .getTvShowsByGenre(16)
      .then((res) => setAnimationTvShow(res))
      .catch((error) => {
        console.log(error);
      });
    apiRequests
      .getTvShowsByGenre(35)
      .then((res) => setComedyTvShow(res))
      .catch((error) => {
        console.log(error);
      });
    apiRequests
      .getTvShowsByGenre(80)
      .then((res) => setCrimeTvShow(res))
      .catch((error) => {
        console.log(error);
      });
    apiRequests
      .getTvShowsByGenre(18)
      .then((res) => setDramaTvShow(res))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={styling.page_container}>
      <p className={styling.section_title}> Action & Adventure </p>
      <div className={styling.movie_container}>
        {actionTvShows.length > 0 &&
          actionTvShows.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.name}
              score={item.vote_average}
              posterPath={item.poster_path}
            ></Card>
          ))}
      </div>
      <p className={styling.section_title}> Animation </p>
      <div className={styling.movie_container}>
        {animationTvShows.length > 0 &&
          animationTvShows.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.name}
              score={item.vote_average}
              posterPath={item.poster_path}
            ></Card>
          ))}
      </div>
      <p className={styling.section_title}> Comedy </p>
      <div className={styling.movie_container}>
        {comedyTvShows.length > 0 &&
          comedyTvShows.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.name}
              score={item.vote_average}
              posterPath={item.poster_path}
            ></Card>
          ))}
      </div>
      <p className={styling.section_title}> Crime </p>
      <div className={styling.movie_container}>
        {crimeTvShows.length > 0 &&
          crimeTvShows.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.name}
              score={item.vote_average}
              posterPath={item.poster_path}
            ></Card>
          ))}
      </div>
      <h1 className={styling.section_title}> Drama </h1>
      <div className={styling.movie_container}>
        {dramaTvShows.length > 0 &&
          dramaTvShows.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.name}
              score={item.vote_average}
              posterPath={item.poster_path}
            ></Card>
          ))}
      </div>
    </div>
  );
}
export default TvShowPage;
