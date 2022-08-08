import { useEffect, useState } from "react";
import Card from "../../Card/Card";
import apiRequests from "../../../api/apiRequests";
import styling from "./MoviesPage.module.css";
function MoviesPage() {
  const [actionMovies, setActionMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [crimeMovies, setCrimeMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  useEffect(() => {
    apiRequests
      .getMoviesByGenre(28)
      .then((res) => setActionMovies(res))
      .catch((error) => {
        console.log(error);
      });
    apiRequests
      .getMoviesByGenre(16)
      .then((res) => setAnimationMovies(res))
      .catch((error) => {
        console.log(error);
      });
    apiRequests
      .getMoviesByGenre(35)
      .then((res) => setComedyMovies(res))
      .catch((error) => {
        console.log(error);
      });
    apiRequests
      .getMoviesByGenre(80)
      .then((res) => setCrimeMovies(res))
      .catch((error) => {
        console.log(error);
      });
    apiRequests
      .getMoviesByGenre(18)
      .then((res) => setDramaMovies(res))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={styling.page_container}>
      <p className={styling.section_title}> Action </p>
      <div className={styling.movie_container}>
        {actionMovies.length > 0 &&
          actionMovies.map((item) => (
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
        {animationMovies.length > 0 &&
          animationMovies.map((item) => (
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
        {comedyMovies.length > 0 &&
          comedyMovies.map((item) => (
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
        {crimeMovies.length > 0 &&
          crimeMovies.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.name}
              score={item.vote_average}
              posterPath={item.poster_path}
            ></Card>
          ))}
      </div>
      <p className={styling.section_title}> Drama </p>
      <div className={styling.movie_container}>
        {dramaMovies.length > 0 &&
          dramaMovies.map((item) => (
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
export default MoviesPage;
