import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // When on the home page, respond to hash changes by scrolling to sections
    if (location.pathname === "/") {
      const hash = location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }, [location]);

  return (
    <nav className={`${styles.Navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div  className="NavbarLink">
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
        <RouterLink to="/#about" className={styles.routerHomeLink}>About</RouterLink>
        <RouterLink to="/#projects" className={styles.routerHomeLink}>Projects</RouterLink>
      </div>
      
    </nav>
  );
};

export default Navbar;
