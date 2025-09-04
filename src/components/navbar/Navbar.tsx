import styles from './Navbar.module.css';


export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}