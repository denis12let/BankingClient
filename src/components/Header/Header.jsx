import React, { useState } from 'react';
import fonbet from '../../assets/images/fonbet.png';
import header from './Header.module.css';
import HeaderNavbar from './Navbar/Navbar';
import TooltipTrigger from 'components/TooltipTrigger/TooltipTrigger';
import Avatar from 'ui/Avatar/Avatar';
import Button from 'ui/Button/Button';
import nightTheme from './../../assets/icons/themes/dark-theme.svg';
import lightTheme from './../../assets/icons/themes/light-theme.svg';
import { THEME, useTheme } from 'context';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const info = ['asd', 'qwe'];
  const [isLightTheme, setIsLightTheme] = useState(theme === THEME.LIGHT);

  const handleToggleTheme = () => {
    setIsLightTheme((prev) => !prev);
    toggleTheme();
  };

  return (
    <div className={header.header}>
      <div className={header.header__inner}>
        <img src={fonbet} className={header.header__img} />
        <HeaderNavbar />
        <TooltipTrigger text="+375 (44) 123 12 23" info={info} />
        <div className={header.settings}>
          <Button onClick={handleToggleTheme}>
            <div className={header.icon__container}>
              <img src={nightTheme} className={`${header.icon} ${isLightTheme ? header.hidden : ''}`} />
              <img src={lightTheme} className={`${header.icon} ${isLightTheme ? '' : header.hidden}`} />
            </div>
          </Button>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;