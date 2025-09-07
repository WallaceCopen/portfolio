import styles from './Navbar.module.css';
import React from 'react';

const Navbar: React.FC = () => { 
  return (
    <div className={styles.Navbar}>
      <nav>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
      </nav>
    </div>
    
  );
};

export default Navbar;