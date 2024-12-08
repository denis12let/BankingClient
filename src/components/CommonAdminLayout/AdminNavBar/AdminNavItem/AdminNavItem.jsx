import React from 'react';
import styles from './AdminNavItem.module.css';
import NavLinkItem from 'ui/Link/Link';
import { useLocation } from 'react-router-dom';

const AdminNavItem = ({ children, path, itemClass }) => {
  const location = useLocation();
  console.log(itemClass);
  return (
    <NavLinkItem to={path}>
      <div className={`${styles.link} ${styles.itemClass}  ${location.pathname === path ? styles.active : ''}`}>{children}</div>
    </NavLinkItem>
  );
};

export default AdminNavItem;
