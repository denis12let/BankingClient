import React from 'react';
import navbar from './Navbar.module.css';
import NavLinkItem from 'ui/Link/Link';
import { APP_PATH } from 'constants/app';

const HeaderNavbar = () => {
  return (
    <ul className={navbar.navbar}>
      <NavLinkItem to={APP_PATH.MAIN}>Лента</NavLinkItem>
      <NavLinkItem to={APP_PATH.ACCOUNT}>Карты</NavLinkItem>
      <NavLinkItem to={APP_PATH.DEPOSITS}>Вклады</NavLinkItem>
      <NavLinkItem to={APP_PATH.LOANS}>Кредиты</NavLinkItem>
      <NavLinkItem to={APP_PATH.ABOUT}>О нас</NavLinkItem>
    </ul>
  );
};

export default HeaderNavbar;
