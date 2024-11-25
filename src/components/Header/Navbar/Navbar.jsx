import React from 'react';
import navbar from './Navbar.module.css';
import NavLinkItem from 'ui/Link/Link';
import { APP_ROUTES } from 'constants/app';

const HeaderNavbar = () => {
  return (
    <ul className={navbar.navbar}>
      <NavLinkItem to={APP_ROUTES.MAIN}>Лента</NavLinkItem>
      <NavLinkItem to={APP_ROUTES.ACCOUNT}>Карты</NavLinkItem>
      <NavLinkItem to={APP_ROUTES.DEPOSITS}>Вклады</NavLinkItem>
      <NavLinkItem to={APP_ROUTES.LOANS}>Кредиты</NavLinkItem>
      <NavLinkItem to={APP_ROUTES.ABOUT}>О нас</NavLinkItem>
    </ul>
  );
};

export default HeaderNavbar;
