import React from 'react';
import styles from './AccountNavItem.module.css';
import NavLinkItem from 'ui/Link/Link';
import { useLocation } from 'react-router-dom';

const AccountNavItem = ({ children, path }) => {
  const location = useLocation();
  console.log(location);
  console.log('qwertyu:  ', path);
  return (
    <NavLinkItem to={path}>
      <div className={`${styles.link} ${location.pathname === path ? styles.active : ''}`}>{children}</div>
    </NavLinkItem>
  );
};

export default AccountNavItem;
