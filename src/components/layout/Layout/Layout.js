import MainNavigation from "../MainNavigation/MainNavigation";
// import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
function Layout(props) {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main className={styles.main}>{props.children}</main>
      {/* <Footer className={styles.footer}></Footer> */}
    </div>
  );
}
export default Layout;
