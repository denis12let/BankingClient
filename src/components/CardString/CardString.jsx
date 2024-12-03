import React from 'react';
import styles from './CardString.module.css';
import { getCardDetails } from 'utils/cardUtils';
import visaBlue from 'assets/icons/card/visa-blue.svg';
import americanExpressBlue from 'assets/icons/card/american-express-blue.svg';

const CardString = ({ customName, id, balance, number, isAccountTransfer }) => {
  const card = getCardDetails(number);
  if (card.type === 'Visa') card.icon = visaBlue;
  if (card.type === 'AmericanExpress') card.icon = americanExpressBlue;

  return (
    <div className={styles.string}>
      <div className={styles.content}>
        <div className={styles.name}>
          {customName}#{id}
        </div>
        <div className={styles.balance}> {balance} BYN</div>
      </div>
      <img className={styles.img} src={card.icon} styles={{ backgroundColor: card.icon }} alt="" />
    </div>
  );
};

export default CardString;
