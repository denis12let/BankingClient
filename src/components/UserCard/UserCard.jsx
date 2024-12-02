import React from 'react';
import styles from './UserCard.module.css';
import { convertDateToCard, getCardDetails } from 'utils/cardUtils';

const UserCard = ({ cardData, ...props }) => {
  const { type, color, icon } = getCardDetails(cardData.number);
  return (
    <div className={styles.wrapper} style={{ background: color }}>
      <div className={styles.header}>
        <div className={styles.customName}>
          {cardData.customName}#{cardData.id}
        </div>
        <div className={styles.typeImg}>
          <img src={icon} alt="" />
        </div>
      </div>
      <div className={styles.holderName}>{cardData.holderName}</div>
      <div className={styles.number}>{cardData.number}</div>
      <div className={styles.cardDetails}>
        <div className={styles.expiryBlock}>
          <span className={styles.label}>Срок действия</span>
          <span>{convertDateToCard(cardData.date)}</span>
        </div>
        <div className={styles.balanceBlock}>
          <span className={styles.label}>Баланс</span>
          <span className={styles.balanceText}>{cardData.balance} BYN</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
