import React, { useMemo } from "react";
import styles from "./IconList.module.css";

export type IconItem = {
  label: string;
  imgSrc?: string;
  icon?: React.ReactNode;
};

type IconListProps = {
  title?: string;
  items: IconItem[];
  columns?: 3 | 4 | 5 | 6;
  compact?: boolean;
  ariaLabel?: string;

  marquee?: boolean;
  reverse?: boolean;
};

const IconList: React.FC<IconListProps> = ({
  title,
  items,
  columns = 4,
  compact = false,
  ariaLabel,
  marquee = false,
  reverse = false
}) => {
  // Duplicate items for seamless loop
  const loopItems = useMemo(
    () => (marquee ? [...items, ...items] : items),
    [marquee, items]
  );

  return (
    <section
      className={`${styles.section} ${compact ? styles.compact : ""}`}
      aria-label={ariaLabel ?? title}
    >
      {title && <h3 className={styles.title}>{title}</h3>}

      {marquee ? (
        <div
          className={styles.scroller}
          style={{
            animationDirection: reverse ? "reverse" : "normal"
          }}
        >
          {loopItems.map((it, idx) => (
            <div className={styles.card} key={`${it.label}-${idx}`}>
              {it.imgSrc ? (
                <img className={styles.logo} src={it.imgSrc} alt={it.label} />
              ) : (
                <div className={styles.logo}>{it.icon}</div>
              )}
              <span className={styles.label}>{it.label}</span>
            </div>
          ))}
        </div>
      ) : (
        <ul
          className={styles.grid}
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {items.map((it) => (
            <li className={styles.card} key={it.label}>
              {it.imgSrc ? (
                <img className={styles.logo} src={it.imgSrc} alt={it.label} />
              ) : (
                <div className={styles.logo}>{it.icon}</div>
              )}
              <span className={styles.label}>{it.label}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default IconList;