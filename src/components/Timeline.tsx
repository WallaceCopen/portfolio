import React from 'react';
import styles from './Timeline.module.css';

interface TimelineItemData {
  date: string;
  label: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItemData[];
}

const TimelineItem: React.FC<{ item: TimelineItemData }> = ({ item }) => {
  return (
    <div className={styles.aboutMeTimelineItem}>
      <div className={styles.aboutMeTimelineDate}>{item.date}</div>
      <div className={styles.aboutMeTimelineLabel}>{item.label}</div>
      <p className={styles.aboutMeTimelineDescription}>{item.description}</p>
    </div>
  );
};


const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className={styles.aboutMeTimeline}>
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Timeline;
