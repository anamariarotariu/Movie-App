const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "9f092352e88056904a8da830e19252d6";
class apiRequests {
  async getTopRatedMovies(page = 1) {
    const url = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
    const res = await fetch(url);
    const res_1 = await res.json();
    return res_1.results;
  }
  async getTopRatedTvShows(page = 1) {
    const url = `${API_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
    const res = await fetch(url);
    const res_1 = await res.json();
    return res_1.results;
  }
  async getPopularMovies() {
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}`;
    const res = await fetch(url);
    const res_1 = await res.json();
    return res_1.results;
  }
  async getPopularTvShows() {
    const url = `${API_URL}/tv/popular?api_key=${API_KEY}`;
    const res = await fetch(url);
    const res_1 = await res.json();
    return res_1.results;
  }
  async getUpcomingMovies() {
    const url = `${API_URL}/movie/upcoming?api_key=${API_KEY}`;
    const res = await fetch(url);
    const res_1 = await res.json();
    return res_1.results;
  }
  async getUpcomingTvShows() {
    const url = `${API_URL}/tv/airing_today?api_key=${API_KEY}`;
    const res = await fetch(url);
    const res_1 = await res.json();
    return res_1.results;
  }
  async getMovieInfo(id) {
    const urls = [
      `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
      `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
    ];
    const movieData = {};
    const fetchs = [
      fetch(urls[0])
        .then((res) => res.json())
        .then((res) => (movieData.general = res)),
      fetch(urls[1])
        .then((res) => res.json())
        .then((res) => (movieData.credits = res)),
    ];
    await Promise.all(fetchs);
    return movieData;
  }
  async getTvShowInfo(id) {
    const urls = [
      `${API_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`,
      `${API_URL}/tv/${id}/credits?api_key=${API_KEY}&language=en-US`,
    ];
    const tvShowData = {};
    const fetchs = [
      fetch(urls[0])
        .then((res) => res.json())
        .then((res) => (tvShowData.general = res)),
      fetch(urls[1])
        .then((res) => res.json())
        .then((res) => (tvShowData.credits = res)),
    ];
    await Promise.all(fetchs);
    return tvShowData;
  }
  async getMoviesByGenre(genreId) {
    const url = `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
    const res = await fetch(url);
    const res_1 = await res.json();
    return res_1.results;
  }
  async getTvShoesByGenre(genreId) {
    const url = `${API_URL}/discover/tv?api_key=${API_KEY}&with_genres=${genreId}`;
    const res = await fetch(url);
    const res_1 = await res.json();
    return res_1.results;
  }
}
export default new apiRequests();
