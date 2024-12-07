import React from 'react';
import styles from './CalendarInfo.module.css';

const CalendarInfo = () => {
  return (
    <div className={styles.legend}>
      <div className={styles.legendItem}>
        <div className={`${styles.colorBox} tile-neutral`}></div>
        <span>Нет операций</span>
      </div>
      <div className={styles.legendItem}>
        <div className={`${styles.colorBox} tile-green-light`}></div>
        <span>1-5 операций</span>
      </div>
      <div className={styles.legendItem}>
        <div className={`${styles.colorBox} tile-green-medium`}></div>
        <span>6-10 операций</span>
      </div>
      <div className={styles.legendItem}>
        <div className={`${styles.colorBox} tile-green-dark`}></div>
        <span>11-20 операций</span>
      </div>
      <div className={styles.legendItem}>
        <div className={`${styles.colorBox} tile-green-very-dark`}></div>
        <span>Больше 20 операций</span>
      </div>
    </div>
  );
};

export default CalendarInfo;
