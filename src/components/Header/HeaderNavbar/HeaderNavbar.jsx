import React from 'react';
import styles from './HeaderNavbar.module.css';
import NavLinkItem from 'ui/Link/Link';
import { APP_ROUTES_PATH } from 'constants/app';

const HeaderNavbar = () => {
  return (
    <ul className={styles.navbar}>
      <div className={styles.link}>
        <NavLinkItem to={APP_ROUTES_PATH.MAIN}>Лента</NavLinkItem>
      </div>
      <div className={styles.link}>
        <NavLinkItem to={APP_ROUTES_PATH.ACCOUNT}>Карты</NavLinkItem>
      </div>
      <div className={styles.link}>
        <NavLinkItem to={APP_ROUTES_PATH.DEPOSITS}>Вклады</NavLinkItem>
      </div>
      <div className={styles.link}>
        <NavLinkItem to={APP_ROUTES_PATH.LOANS}>Кредиты</NavLinkItem>
      </div>
      <div className={styles.link}>
        <NavLinkItem to={APP_ROUTES_PATH.ABOUT}>О нас</NavLinkItem>
      </div>
    </ul>
  );
};

export default HeaderNavbar;
