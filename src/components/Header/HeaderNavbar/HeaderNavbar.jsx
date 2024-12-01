import React from 'react';
import styles from './HeaderNavbar.module.css';
import NavLinkItem from 'ui/Link/Link';
import { APP_ROUTES_PATH } from 'constants/app';

const HeaderNavbar = () => {
  return (
    <ul className={styles.navbar}>
      <NavLinkItem to={APP_ROUTES_PATH.MAIN}>
        <div className={styles.link}>Лента</div>
      </NavLinkItem>
      <NavLinkItem to={APP_ROUTES_PATH.ACCOUNT}>
        <div className={styles.link}>Карты</div>
      </NavLinkItem>
      <NavLinkItem to={APP_ROUTES_PATH.DEPOSITS}>
        <div className={styles.link}>Вклады</div>
      </NavLinkItem>
      <NavLinkItem to={APP_ROUTES_PATH.LOANS}>
        <div className={styles.link}>Кредиты</div>
      </NavLinkItem>
      <NavLinkItem to={APP_ROUTES_PATH.ABOUT}>
        <div className={styles.link}>О нас</div>
      </NavLinkItem>
    </ul>
  );
};

export default HeaderNavbar;
