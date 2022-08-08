import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import HomePage from "./components/pages/HomePage/HomePage";
import PopularPage from "./components/pages/PopularPage/PopularPage";
import ComingSoonPage from "./components/pages/ComingSoonPage/ComingSoonPage";
import DetailsPage from "./components/pages/DetailsPage/DetailsPage";
import MoviesPage from "./components/pages/MoviesPage/MoviesPage";
import TvShowPage from "./components/pages/TvShowsPage/TvShowPage";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/popular" element={<PopularPage />}></Route>
          <Route path="/coming-soon" element={<ComingSoonPage />}>
            {" "}
          </Route>
          <Route path="/show/:id" element={<DetailsPage />}>
            {" "}
          </Route>
          <Route path="/movies" element={<MoviesPage></MoviesPage>}>
            {" "}
          </Route>
          <Route path="/tv-shows" element={<TvShowPage></TvShowPage>}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
