import { useEffect, useState } from "react";
import apiRequests from "../../../api/apiRequests";
import Card from "../../Card/Card";
import styling from "../HomePage/HomePage.module.css";
function PopularPage() {
  const [popularMovies, setMovies] = useState([]);
  const [popularTvShows, setTvShows] = useState([]);
  useEffect(() => {
    apiRequests
      .getPopularMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    apiRequests
      .getPopularTvShows()
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
        <p className={styling.title}> Popular Movies</p>
        <div className={styling.cards}>
          {popularMovies.length > 0 &&
            popularMovies.slice(0, 6).map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                score={item.vote_average}
                posterPath={item.poster_path}
              >
                {" "}
              </Card>
            ))}
        </div>
      </div>
      <div>
        <p className={styling.title}> Popular TV Shows</p>
        <div className={styling.cards}>
          {popularTvShows.length > 0 &&
            popularTvShows.slice(0, 6).map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.name}
                score={item.vote_average}
                posterPath={item.poster_path}
              >
                {" "}
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
export default PopularPage;
