import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import styles from "./Layout.module.css";
function Layout(props) {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main className={styles.main}>{props.children}</main>
      <Footer></Footer>
    </div>
  );
}
export default Layout;
