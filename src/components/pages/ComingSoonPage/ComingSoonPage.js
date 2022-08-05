import { useEffect, useState } from "react";
import apiRequests from "../../../api/apiRequests";
import Card from "../../Card/Card";
import styling from "../HomePage/HomePage.module.css";
function ComingSoonPage() {
  const [upcomingMovies, setMovies] = useState([]);
  const [upcomingTvShows, setTvShows] = useState([]);
  useEffect(() => {
    apiRequests
      .getUpcomingMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    apiRequests
      .getUpcomingTvShows()
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
        <p className={styling.title}> Coming Soon Movies</p>
        <div className={styling.cards}>
          {upcomingMovies.length > 0 &&
            upcomingMovies.slice(0, 6).map((item) => (
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
        <p className={styling.title}> Coming Soon TV Shows</p>
        <div className={styling.cards}>
          {upcomingTvShows.length > 0 &&
            upcomingTvShows.slice(0, 6).map((item) => (
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
      </div>{" "}
    </div>
  );
}
export default ComingSoonPage;
