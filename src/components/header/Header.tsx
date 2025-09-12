import { Paragraph, Title } from '../general/Text';
import GridBackground from '../general/GridBackground';
import styles from './Header.module.css';
import Container from '../general/Container';
import ContactIcons from './contact/ContactIcons';
import DownArrow from '../../assets/arrow-down.svg';


const Header: React.FC = () => (
    <div className={styles.header}>
        <GridBackground />
        <Title className={styles.title}>Wallace Copen</Title>
        <Paragraph className={styles.subtitle}>Developer • Designer</Paragraph>
        <Container>
            <ContactIcons />
        </Container>
        <img src={DownArrow} className={styles.downArrow} alt="Down Arrow" />
    </div>
);

export default Header;