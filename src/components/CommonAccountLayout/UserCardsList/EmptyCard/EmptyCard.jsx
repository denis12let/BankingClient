import React from 'react';
import styles from './EmptyCard.module.css';
import DefaultButton from 'ui/DefaultButton/DefaultButton';
import plus from './../../../../assets/icons/card/plus.svg';
import NavLinkItem from 'ui/Link/Link';
import { APP_ROUTES_PATH } from 'constants/app';
import { THEME, useTheme } from 'context';

const EmptyCard = () => {
  const { theme } = useTheme();

  return (
    <div className={styles.emptyCard}>
      <NavLinkItem to={APP_ROUTES_PATH.ACCOUNT + APP_ROUTES_PATH.CARD}>
        <DefaultButton>
          <div className={`${styles.card} ${theme === THEME.LIGHT ? styles.light : styles.dark}`}>
            <img src={plus} className={styles.add} alt="" />
          </div>
        </DefaultButton>
      </NavLinkItem>
    </div>
  );
};

export default EmptyCard;
