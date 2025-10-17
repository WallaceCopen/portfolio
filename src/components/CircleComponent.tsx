import React from 'react';
import styles from './CircleComponent.module.css';

interface CircleComponentProps {
  src: string;
  alt?: string;
  size?: number;
  link?: string;
}

const CircleComponent: React.FC<CircleComponentProps> = ({
  src,
  alt = 'Profile picture',
  size = 150,
  link
}) => {
  const img = (
    <img
      src={src}
      alt={alt}
      className={styles.circleImage}
      style={{ width: size, height: size }}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );

  return (
    <div className={styles.circleWrapper}>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.circleLink}
          aria-label={alt}
          title={alt}
        >
          {img}
        </a>
      ) : (
        img
      )}
    </div>
  );
};

export default CircleComponent;