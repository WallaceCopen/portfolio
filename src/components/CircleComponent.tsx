import React from 'react';
import styles from './CircleComponent.module.css';

interface CircleComponentProps {
  src: string;
  alt?: string;
  size?: number;
}

const CircleComponent: React.FC<CircleComponentProps> = ({ src, alt = 'Profile picture', size = 150 }) => {
  return (
    <div className={styles.circleWrapper}>
      <img
        src={src}
        alt={alt}
        className={styles.circleImage}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default CircleComponent;