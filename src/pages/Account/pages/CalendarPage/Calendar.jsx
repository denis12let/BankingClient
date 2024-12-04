import React from 'react';
import styles from './Calendar.module.css';

const Calendar = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Календарь</h2>
      <div className={styles.inner}></div>
    </div>
  );
};

export default Calendar;
