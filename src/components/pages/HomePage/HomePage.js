import apiRequests from "../../../api/apiRequests";
import Card from "../../Card/Card";
import styling from "./HomePage.module.css";
import { useState, useEffect } from "react";

function HomePage() {
  function getTv() {
    return "tv";
  }
  function getMovieType() {
    return "movie";
  }
  const tv = getTv();
  const movie = getMovieType();
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  useEffect(() => {
    apiRequests
      .getTopRatedMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((error) => {
        console.log(error);
      });
    apiRequests
      .getTopRatedTvShows()
      .then((res) => {
        setTvShows(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <p className={styling.title}> Top Rated Movies</p>
        <div className={styling.cards}>
          {movies.length > 0 &&
            movies.slice(0, 6).map((item) => (
              <Card
                key={item.id}
                id={item.id}
                date={item.release_date}
                title={item.title}
                score={item.vote_average}
                posterPath={item.poster_path}
                content={movie}
              >
                {" "}
              </Card>
            ))}
        </div>
      </div>
      <div>
        <p className={styling.title}> Top Rated TV Shows</p>
        <div className={styling.cards}>
          {tvShows.length > 0 &&
            tvShows.slice(0, 6).map((item) => (
              <Card
                key={item.id}
                id={item.id}
                date={item.release_date}
                title={item.name}
                score={item.vote_average}
                posterPath={item.poster_path}
                content={tv}
              >
                {" "}
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
export default HomePage;
