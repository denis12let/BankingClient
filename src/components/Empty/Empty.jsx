import React from 'react';
import styles from './Empty.module.css';
import emptyBox from 'assets/icons/common/empty-box-icon.svg';

const Empty = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.title}>Здесь ничего нет</div>
      <img src={emptyBox} className={styles.boxImg} alt="" />
    </div>
  );
};

export default Empty;
