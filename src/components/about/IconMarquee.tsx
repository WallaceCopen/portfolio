import React from "react";
import styles from "./IconMarquee.module.css";
import Marquee from "react-fast-marquee";

export type IconItem = {
  label: string;
  imgSrc?: string;
  icon?: React.ReactNode;
  link: string;
};

type IconListProps = {
  title?: string;
  items: IconItem[];
  reverse?: boolean;
};

const IconList: React.FC<IconListProps> = ({
  title,
  items,
  reverse = false,
}) => {
  return (
    <div className={styles.marqueeContainer}>
      {title && <div className={styles.title}>{title}</div>}
      <Marquee
        speed={30}
        gradient={true}
        gradientColor={"rgba(255, 255, 255, 0.04)"}
        direction={reverse ? "right" : "left"}
        pauseOnHover={true}
        loop={0}
        autoFill
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
          >
            <div className={styles.card}>
              <img src={item.imgSrc} alt={item.label} className={styles.logo} />
              <p className={styles.iconLabel}>{item.label}</p>
            </div>
          </a>
        ))}
      </Marquee>
    </div>
  );
};

export default IconList;