import { LargeTitle, Title } from '../Text';
import GridBackground from '../GridBackground';
import styles from './Header.module.css';
import Container from '../Container';
import ContactIcons from '../contact/ContactIcons';


const Header: React.FC = () => (
    <div id="home" className={styles.header}>
        <GridBackground />
        <LargeTitle>Wallace Copen</LargeTitle>
        <Title className={styles.subtitle}>Developer | Designer | Student</Title>
        <Container>
            <ContactIcons />
        </Container>
        <a href="#about" className={styles.downArrow}>
           <svg
  className={styles.downArrowIcon}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
  focusable="false"
>
  <path d="M6 9l6 6 6-6" />
</svg>
        </a>
    </div>
);

export default Header;