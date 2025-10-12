import React from 'react';
import styles from './ContactIcons.module.css';
import MailIcon from '../../assets/mail.svg?react';
import GithubIcon from '../../assets/github.svg?react';

const ContactIcons: React.FC = () => (
    <div className={styles.iconContainer}>
        <a href="https://github.com/WallaceCopen" target="_blank" rel='noopener noreferrer'>
            <GithubIcon className={styles.icon} />
        </a>
        
        <a href="mailto:wallacecopen18@gmail.com" target="_blank" rel="noopener noreferrer">
            <MailIcon className={styles.icon} />
        </a>
        
    </div>
);

export default ContactIcons;