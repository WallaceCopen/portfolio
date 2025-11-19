import React, { useState, useEffect } from "react";
import { Link } from "../Text";
import styles from "./Navbar.module.css";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.Navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <RouterLink
        to="/"
        className={styles.routerHomeLink}
        onClick={(e) => {
          if (location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        Home
      </RouterLink>
      <Link href="#about">About</Link>
      <Link href="#projects">Projects</Link>
    </nav>
  );
};

export default Navbar;
