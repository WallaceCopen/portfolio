import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <a className={styles.navItem} href="#">Home</a>
      <a className={styles.navItem} href="#">About</a>
      <a className={styles.navItem} href="#">Contact</a>
    </nav>
  );
};

export default Navbar;