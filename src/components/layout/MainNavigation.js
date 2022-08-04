import navStyling from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MainNavigation() {
  return (
    <header className={navStyling.header}>
      <div className={navStyling.logo}> Cinetrex </div>
      <nav>
        <ul className={navStyling.list}>
          <li>
            <Link to="/" className={navStyling.nav_item}>
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/tv-shows" className={navStyling.nav_item}>
              {" "}
              TV Shows{" "}
            </Link>
          </li>
          <li>
            <Link to="/movies" className={navStyling.nav_item}>
              {" "}
              Movies{" "}
            </Link>
          </li>
          <li>
            <Link to="/popular" className={navStyling.nav_item}>
              {" "}
              Popular{" "}
            </Link>
          </li>
          <li>
            <Link to="/coming-soon" className={navStyling.nav_item}>
              {" "}
              Coming Soon{" "}
            </Link>
          </li>
        </ul>
        <div className={navStyling.search}>
          <button className={navStyling.btn}>
            {" "}
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input
            type="search"
            placeholder="Search..."
            className={navStyling.input}
          ></input>
        </div>
      </nav>
    </header>
  );
}
export default MainNavigation;
