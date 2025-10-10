import { LargeTitle, Title } from '../Text';
import GridBackground from '../GridBackground';
import styles from './Header.module.css';
import Container from '../Container';
import ContactIcons from '../contact/ContactIcons';
import DownArrow from '../../assets/arrow-down.svg';


const Header: React.FC = () => (
    <div className={styles.header}>
        <GridBackground />
        <LargeTitle>Wallace Copen</LargeTitle>
        <Title className={styles.subtitle}>Developer | Designer | Student</Title>
        <Container>
            <ContactIcons />
        </Container>
        <a href="#about" className={styles.downArrow}>
            <img src={DownArrow} alt="Scroll to About Section" />
        </a>
    </div>
);

export default Header;