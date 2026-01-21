import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home"); // Default to home
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "projects"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { 
        rootMargin: "-20% 0px -40% 0px", 
        threshold: 0.1 
      }
    );
  
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  
    return () => observer.disconnect();
  }, [location.pathname]);
  
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", hash);
        setActiveHash(hash);
      }
    }
  };

  return (
    <nav className={`${styles.Navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navLinks}>
        <RouterLink
          to="/#home"
          className={`${styles.routerHomeLink} ${activeHash === "#home" ? styles.active : ""}`}
          onClick={(e) => handleNavLinkClick(e, "#home")}
        >
          Home
          <span className={styles.indicator}></span>
        </RouterLink>

        <RouterLink 
          to="/#about" 
          className={`${styles.routerHomeLink} ${activeHash === "#about" ? styles.active : ""}`}
          onClick={(e) => handleNavLinkClick(e, "#about")}
        >
          About
          <span className={styles.indicator}></span>
        </RouterLink>

        <RouterLink 
          to="/#projects" 
          className={`${styles.routerHomeLink} ${activeHash === "#projects" ? styles.active : ""}`}
          onClick={(e) => handleNavLinkClick(e, "#projects")}
        >
          Projects
          <span className={styles.indicator}></span>
        </RouterLink>
      </div>
    </nav>
  );
};

export default Navbar;
