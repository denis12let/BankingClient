import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUserThunk } from 'store/actions';

const Header = () => {
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme();
  const info = [<p key="1">Звоните в любое время</p>, <p key="2">Всегда на связи</p>];
  const [isLightTheme, setIsLightTheme] = useState(theme === THEME.LIGHT);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
  }, []);

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
          {user?.role === 'ADMIN' ? <NavLinkItem to={APP_ROUTES_PATH.ADMIN}>ADMIN</NavLinkItem> : ''}
          {/* <DefaultButton onClick={handleToggleTheme}>
            <div className={header.icon__container}>
              <img src={nightTheme} className={`${header.icon} ${isLightTheme ? header.hidden : ''}`} alt="" />
              <img src={lightTheme} className={`${header.icon} ${isLightTheme ? '' : header.hidden}`} alt="" />
            </div>
          </DefaultButton> */}
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
