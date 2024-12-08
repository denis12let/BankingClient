import React from 'react';
import styles from './AdminNavBar.module.css';
import AccountNavItem from './AdminNavItem/AdminNavItem';
import { APP_ROUTES, APP_ROUTES_PATH } from 'constants/app';
import DefaultButton from 'ui/DefaultButton/DefaultButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetUser } from 'store/reducers/userReducers/userSlice';
import { resetProfile } from 'store/reducers/userReducers/profileSlice';

const AdminNavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const linksObjectNames = {
    ADMIN_USERS: 'Пользователи',
    ADMIN_NEWS: 'Новости',
    ADMIN_PARTNERS: 'Реклама',
    ADMIN_BANK: 'Банк',
    ADMIN_SERVICES: 'Услуги',
  };

  const linksList = Object.keys(linksObjectNames).map((key) => (
    <AccountNavItem key={key} path={APP_ROUTES_PATH.ADMIN + '/' + APP_ROUTES[key]} itemClass={key.toLowerCase()}>
      {linksObjectNames[key]}
    </AccountNavItem>
  ));

  const leaveAccountHandler = () => {
    // localStorage.setItem('isAuth', false);
    // localStorage.setItem('isProfile', false);
    // localStorage.setItem('token', '');
    // dispatch(resetUser());
    // dispatch(resetProfile());
    // navigate(APP_ROUTES_PATH.ROOT);
  };

  return (
    <div className={styles.navList}>
      {linksList}
      <div className={styles.leaveBtn}>
        <DefaultButton
          onClick={() => leaveAccountHandler()}
          style={{
            fontSize: '14px',
            fontWeight: '600',
          }}
        >
          Выйти из аккаунта
        </DefaultButton>
      </div>
    </div>
  );
};

export default AdminNavBar;
