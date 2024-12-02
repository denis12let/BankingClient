import CommonBankLayout from 'components/CommonBankLayout/CommonBankLayout';
import React from 'react';
import styles from './Main.module.css';
import PartnersList from './PartnersList/PartnersList';
import NewsList from '../MainPage/NewsList/NewsList';

const Main = () => {
  return (
    <div className={styles.content}>
      <NewsList />
      <PartnersList />
    </div>
  );
};

export default Main;
