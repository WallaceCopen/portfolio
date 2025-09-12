
import React from "react";
import { Link } from "../general/Text";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.Navbar}>
      <Link href='#home'>Home</Link>
      <Link href='#about'>About</Link>
      <Link href='#projects'>Projects</Link>
    </nav>
  );
};

export default Navbar;
