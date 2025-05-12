import React, { useEffect, useState } from 'react';
import fonbet from '../../assets/images/logo-big.png';
import burger from '../../assets/icons/burger.svg';
import close from '../../assets/icons/common/close.svg';
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
import { setError } from 'store/reducers/userReducers/userSlice';
import { useScreenWidth } from 'hooks/useScreenWidth';

const Header = () => {
  const currentWidth = useScreenWidth();

  const [isActive, setIsActive] = useState(false);

  const handleBurgerMenu = () => setIsActive(!isActive);

  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme();
  const info = [<p key="1">Звоните в любое время</p>, <p key="2">Всегда на связи</p>];
  const [isLightTheme, setIsLightTheme] = useState(theme === THEME.LIGHT);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
    return () => {
      dispatch(setError(null));
    };
  }, []);

  const handleToggleTheme = () => {
    setIsLightTheme((prev) => !prev);
    toggleTheme();
  };

  useEffect(() => {
    if (currentWidth >= 560 && isActive) {
      setIsActive(false);
    }
  }, [currentWidth]);

  return (
    <div className={`${header.header} ${theme === THEME.LIGHT ? header.light : header.dark} ${isActive ? header.active : ''}`}>
      <div className={header.header__inner}>
        <div className={header.header__logo}>
          <NavLinkItem to={APP_ROUTES_PATH.ROOT}>
            <img src={fonbet} className={header.header__img} alt="" />
          </NavLinkItem>
        </div>
        {!isActive && currentWidth < 560 ? (
          <div className={header.burgerIcon}>
            <DefaultButton onClick={handleBurgerMenu}>
              <img src={burger} alt="" />
            </DefaultButton>
          </div>
        ) : (
          <div className={styles.burger}>
            <div className={header.closeIcon}>
              <DefaultButton onClick={handleBurgerMenu}>
                <img src={close} alt="" />
              </DefaultButton>
            </div>
            <HeaderNavbar />
            <div className={styles.tooltipContainer}>
              <TooltipTrigger text="+375 (44) 123 12 23" info={info} />
            </div>
            <div className={header.settings}>
              {user?.role === 'ADMIN' ? <NavLinkItem to={APP_ROUTES_PATH.ADMIN}>ADMIN</NavLinkItem> : ''}
              <DefaultButton onClick={handleToggleTheme}>
                <div className={header.icon__container}>
                  <img src={nightTheme} className={`${header.icon} ${isLightTheme ? header.hidden : ''}`} alt="" />
                  <img src={lightTheme} className={`${header.icon} ${isLightTheme ? '' : header.hidden}`} alt="" />
                </div>
              </DefaultButton>
              <Avatar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
