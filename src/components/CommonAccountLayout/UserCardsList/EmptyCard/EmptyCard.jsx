import React from 'react';
import styles from './EmptyCard.module.css';
import DefaultButton from 'ui/DefaultButton/DefaultButton';
import plus from './../../../../assets/icons/card/plus.svg';
import NavLinkItem from 'ui/Link/Link';
import { APP_ROUTES_PATH } from 'constants/app';

const EmptyCard = () => {
  return (
    <div className={styles.emptyCard}>
      <NavLinkItem to={APP_ROUTES_PATH.ACCOUNT + APP_ROUTES_PATH.CARD}>
        <DefaultButton>
          <div className={styles.card}>
            <img src={plus} className={styles.add} alt="" />
          </div>
        </DefaultButton>
      </NavLinkItem>
    </div>
  );
};

export default EmptyCard;
