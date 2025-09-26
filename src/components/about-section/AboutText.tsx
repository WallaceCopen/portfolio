import styles from './AboutSection.module.css'
import { Paragraph } from '../general/Text';


const AboutText: React.FC= () => {
    return (
        <div className={styles.text}>
            <Paragraph>
                Hi, I am Wallace Copen. I am a high school student who studies computer science. I mainly design and develop modern and sleek websites.
            </Paragraph>
        </div>
    );
};

export default AboutText;