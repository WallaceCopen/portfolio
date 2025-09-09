import { Paragraph, Title } from '../Text';
import GridBackground from '../GridBackground';
import styles from './Header.module.css';

const Header: React.FC = () => (
    <div className={styles.header}>
        <GridBackground />
        <Title className={styles.title}>Wallace Copen</Title>
        <Paragraph className={styles.subtitle}>Developer • Designer</Paragraph>
    </div>
);

export default Header;