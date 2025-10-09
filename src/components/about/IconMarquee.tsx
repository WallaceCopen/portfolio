import React from "react";
import styles from "./IconMarquee.module.css";
import Marquee from "react-fast-marquee";

export type IconItem = {
  label: string;
  imgSrc?: string;
  icon?: React.ReactNode;
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
        gradientColor={"#fff"}
        direction={reverse ? "right" : "left"}
        pauseOnHover={true}
        loop={0} // Infinite loop
        autoFill
        
      >
        {items.map((item, idx) => (
          <div className={styles.card} key={`${item.label}-${idx}`}>
            {item.imgSrc ? (
              <img className={styles.logo} src={item.imgSrc} alt={item.label} />
            ) : (
              <div className={styles.logo}>{item.icon}</div>
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default IconList;