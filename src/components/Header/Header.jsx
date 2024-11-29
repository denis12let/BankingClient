import React, { useState } from 'react';
import fonbet from '../../assets/images/fonbet.png';
import header from './Header.module.css';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import TooltipTrigger from 'components/TooltipTrigger/TooltipTrigger';
import Avatar from 'ui/Avatar/Avatar';
import Button from 'ui/CustomButton/CustomButton';
import nightTheme from './../../assets/icons/themes/dark-theme.svg';
import lightTheme from './../../assets/icons/themes/light-theme.svg';
import { THEME, useTheme } from 'context';
import NavLinkItem from 'ui/Link/Link';
import { APP_ROUTES_PATH } from 'constants/app';
import DefaultButton from 'ui/DefaultButton/DefaultButton';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const info = ['asd', 'qwe'];
  const [isLightTheme, setIsLightTheme] = useState(theme === THEME.LIGHT);

  const isAuth = !!localStorage.getItem('token');

  const handleToggleTheme = () => {
    setIsLightTheme((prev) => !prev);
    toggleTheme();
  };

  return (
    <div className={header.header}>
      <div className={header.header__inner}>
        <NavLinkItem to={APP_ROUTES_PATH.MAIN}>
          <img src={fonbet} className={header.header__img} />
        </NavLinkItem>
        <HeaderNavbar />
        <TooltipTrigger text="+375 (44) 123 12 23" info={info} />
        <div className={header.settings}>
          <DefaultButton onClick={handleToggleTheme}>
            <div className={header.icon__container}>
              <img src={nightTheme} className={`${header.icon} ${isLightTheme ? header.hidden : ''}`} />
              <img src={lightTheme} className={`${header.icon} ${isLightTheme ? '' : header.hidden}`} />
            </div>
          </DefaultButton>
          <Avatar isAuth={isAuth} />
        </div>
      </div>
    </div>
  );
};

export default Header;
