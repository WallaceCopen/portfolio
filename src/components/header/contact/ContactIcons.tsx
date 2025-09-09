
import React from 'react';
import styles from './ContactIcons.module.css';
import GithubIcon from '../../../assets/github.svg?react';
import MailIcon from '../../../assets/mail.svg?react';


const ContactIcons: React.FC = () => (
    <>
    <a 
        href='https://github.com/WallaceCopen' 
        target='_blank' 
        rel='noopener noreferrer'
    >
        <GithubIcon className={styles.githubIcon} />
    </a>
    <a
        href="mailto:wallacecopen18@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MailIcon className={styles.mailIcon} />
     </a>
    </>
       
        
);

export default ContactIcons;