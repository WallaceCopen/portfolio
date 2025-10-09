
import React, { useState, useEffect } from "react";
import { Link } from "../Text";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <Link href='#home'>Home</Link>
      <Link href='#about'>About</Link>
      <Link href='#projects'>Projects</Link>
    </nav>
  );
};

export default Navbar;
