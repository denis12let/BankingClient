import React from 'react';
import { NavLink } from 'react-router-dom';
import navlink from './Link.module.css';

const NavLinkItem = ({ children, to: path, icon }) => {
  return (
    <NavLink to={path} className={navlink.navLink}>
      {/* {icon || <img src="icon" className={navlink.img} />} */}
      {children}
    </NavLink>
  );
};

export default NavLinkItem;
