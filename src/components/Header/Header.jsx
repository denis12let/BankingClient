import React from 'react';
import fonbet from '../../assets/images/fonbet.png';
import header from './Header.module.css';
import HeaderNavbar from './Navbar/Navbar';
import TooltipTrigger from 'components/TooltipTrigger/TooltipTrigger';
import Avatar from 'ui/Avatar/Avatar';
import Button from 'ui/Button/Button';
import nightTheme from './../../assets/icons/dark-theme.svg';
import lightTheme from './../../assets/icons/light-theme.svg';
import { THEME, useTheme } from 'context';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const info = ['asd', 'qwe'];

  return (
    <div className={header.header}>
      <div className={header.header__inner}>
        <img src={fonbet} className={header.header__img} />
        <HeaderNavbar />
        <TooltipTrigger text="+375 (44) 123 12 23" info={info} />
        <div className={header.settings}>
          <Button onClick={() => toggleTheme()}>
            <img src={theme === THEME.LIGHT ? nightTheme : lightTheme} className={header.header__icon} />
          </Button>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
