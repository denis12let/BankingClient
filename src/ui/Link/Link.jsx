import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Link.module.css';

const NavLinkItem = ({ children, to: path, icon }) => {
  return (
    <NavLink to={path} className={styles.navLink}>
      {/* {icon || <img src="icon" className={styles.img} />} */}
      {children}
    </NavLink>
  );
};

export default NavLinkItem;
