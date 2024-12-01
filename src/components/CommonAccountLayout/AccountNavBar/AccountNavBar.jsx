import React from 'react';
import styles from './AccountNavBar.module.css';
import AccountNavItem from './AccountNavItem/AccountNavItem';
import { APP_ROUTES_PATH } from 'constants/app';

const AccountNavBar = () => {
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
    <AccountNavItem path={APP_ROUTES_PATH[key]}>{linksObjectNames[key]}</AccountNavItem>
  ));

  return <div className={styles.navList}>{linksList}</div>;
};

export default AccountNavBar;
