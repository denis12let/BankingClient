import React from 'react';
import styles from './AccountNavBar.module.css';
import AccountNavItem from './AccountNavItem/AccountNavItem';
import { APP_ROUTES, APP_ROUTES_PATH } from 'constants/app';
import DefaultButton from 'ui/DefaultButton/DefaultButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetUser } from 'store/reducers/userReducers/userSlice';
import { resetProfile } from 'store/reducers/userReducers/profileSlice';
import { THEME, useTheme } from 'context';

const AccountNavBar = () => {
  const { theme } = useTheme();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const linksObjectNames = {
    USER_SERVICES: 'Мои кредиты и вклады',
    EXTERNAL_TRANSFER: 'Перевод на карту',
    INTERNAL_TRANSFER: 'Перевод между своими',
    TRANSACTIONS: 'История операций',
    CALENDAR: 'Календарь операций',
    CARD: 'Добавить карту',
    ACCOUNT_STATEMENT: 'Информация о счёте',
    SETTINGS: 'Настройки аккаунта',
  };

  const linksList = Object.keys(linksObjectNames).map((key) => (
    <AccountNavItem key={key} path={APP_ROUTES_PATH.ACCOUNT + '/' + APP_ROUTES[key]} itemClass={key.toLowerCase()}>
      {linksObjectNames[key]}
    </AccountNavItem>
  ));

  const leaveAccountHandler = () => {
    localStorage.setItem('isAuth', false);
    localStorage.setItem('isProfile', false);
    localStorage.setItem('token', '');
    dispatch(resetUser());
    dispatch(resetProfile());
    navigate(APP_ROUTES_PATH.ROOT);
  };

  return (
    <div className={`${styles.navList} ${theme === THEME.LIGHT ? styles.light : styles.dark}`}>
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

export default AccountNavBar;
