import React from 'react';
import styles from './EmptyCard.module.css';
import DefaultButton from 'ui/DefaultButton/DefaultButton';
import plus from './../../../../assets/icons/card/plus.svg';

const EmptyCard = () => {
  return (
    <DefaultButton>
      <div className={styles.card}>
        <img src={plus} className={styles.add} alt="" />
      </div>
    </DefaultButton>
  );
};

export default EmptyCard;
