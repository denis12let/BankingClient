import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Link.module.css';
import { THEME, useTheme } from 'context';

const NavLinkItem = ({ children, to: path, icon }) => {
  const { theme } = useTheme();

  return (
    <NavLink to={path} className={`${styles.navLink} ${theme === THEME.LIGHT ? styles.light : styles.dark}`}>
      {/* {icon || <img src="icon" className={styles.img} />} */}
      {children}
    </NavLink>
  );
};

export default NavLinkItem;
