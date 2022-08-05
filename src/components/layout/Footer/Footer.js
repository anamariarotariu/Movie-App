import footerStyling from "./Footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className={footerStyling.footer}>
        <div>
          <p className={footerStyling.footer_column_title}> Links </p>
          <div className={footerStyling.footer_grid}>
            <Link to="/movies" className={footerStyling.footer_grid_item}>
              {" "}
              Movies
            </Link>
            <Link to="/action" className={footerStyling.footer_grid_item}>
              Action
            </Link>
            <Link to="/contact" className={footerStyling.footer_grid_item}>
              Contact
            </Link>
            <Link to="/tv-shows" className={footerStyling.footer_grid_item}>
              {" "}
              Tv Show
            </Link>
            <Link to="/horror" className={footerStyling.footer_grid_item}>
              {" "}
              Horror
            </Link>
            <Link to="/about" className={footerStyling.footer_grid_item}>
              {" "}
              About
            </Link>
            <Link to="/popular" className={footerStyling.footer_grid_item}>
              {" "}
              Most Watched
            </Link>
            <Link to="/romantic" className={footerStyling.footer_grid_item}>
              {" "}
              Romantic
            </Link>
            <Link to="/feedback" className={footerStyling.footer_grid_item}>
              {" "}
              Feedback
            </Link>
          </div>
        </div>
        <div className={footerStyling.footer_site_description}>
          <p className={footerStyling.footer_column_title}>About Us</p>
          <p className={footerStyling.footer_site_description_text}>
            <span>Movietrex </span> is free streaming website with zero ads, it
            allows you watch series online free, watch tv shows online in high
            quality for free.
            <br />
            <br />
            This site does not store any files on our server, we only linked to
            the media which is hosted on 3rd party services.
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
