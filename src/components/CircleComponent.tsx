import React from 'react';
import styles from './CircleComponent.module.css';
import { Link } from 'react-router-dom';

interface CircleComponentProps {
  src: string;
  alt?: string;
  size?: number;
  link?: string;
  className?: string;
}

const CircleComponent: React.FC<CircleComponentProps> = ({
  src,
  alt = 'Learn More',
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
        <Link
          to={link}
          preventScrollReset={true}
          className={styles.circleLink}
          aria-label={alt}
          title={alt}
        >
          {img}
        </Link>
      ) : (
        img
      )}
    </div>
  );
};

export default CircleComponent;