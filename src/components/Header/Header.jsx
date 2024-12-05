import React, { useState } from 'react';
import fonbet from '../../assets/images/fonbet.png';
import header from './Header.module.css';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import TooltipTrigger from 'components/TooltipTrigger/TooltipTrigger';
import Avatar from 'ui/Avatar/Avatar';
import nightTheme from './../../assets/icons/themes/dark-theme.svg';
import lightTheme from './../../assets/icons/themes/light-theme.svg';
import { THEME, useTheme } from 'context';
import NavLinkItem from 'ui/Link/Link';
import { APP_ROUTES_PATH } from 'constants/app';
import DefaultButton from 'ui/DefaultButton/DefaultButton';
import styles from './Header.module.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const info = [<p key="1">qweqwfe</p>, <p key="2">werfewf</p>];
  const [isLightTheme, setIsLightTheme] = useState(theme === THEME.LIGHT);

  const isAuth = !!localStorage.getItem('token');

  const handleToggleTheme = () => {
    setIsLightTheme((prev) => !prev);
    toggleTheme();
  };

  return (
    <div className={header.header}>
      <div className={header.header__inner}>
        <div className={header.header__logo}>
          <NavLinkItem to={APP_ROUTES_PATH.ROOT}>
            <img src={fonbet} className={header.header__img} alt="" />
          </NavLinkItem>
        </div>
        <HeaderNavbar />
        <div className={styles.tooltipContainer}>
          <TooltipTrigger text="+375 (44) 123 12 23" info={info} />
        </div>
        <div className={header.settings}>
          <DefaultButton onClick={handleToggleTheme}>
            <div className={header.icon__container}>
              <img src={nightTheme} className={`${header.icon} ${isLightTheme ? header.hidden : ''}`} alt="" />
              <img src={lightTheme} className={`${header.icon} ${isLightTheme ? '' : header.hidden}`} alt="" />
            </div>
          </DefaultButton>
          <Avatar isAuth={isAuth} />
        </div>
      </div>
    </div>
  );
};

export default Header;
