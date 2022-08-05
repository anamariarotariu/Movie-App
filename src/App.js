import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import HomePage from "./components/pages/HomePage/HomePage";
import PopularPage from "./components/pages/PopularPage/PopularPage";
import ComingSoonPage from "./components/pages/ComingSoonPage/ComingSoonPage";
import DetailsPage from "./components/pages/DetailsPage/DetailsPage";
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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
