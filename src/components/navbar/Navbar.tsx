import styles from './Navbar.module.css';


export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <nav>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
      </nav>
    </div>
    
  )
}