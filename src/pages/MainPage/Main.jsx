import CommonBankLayout from 'components/CommonBankLayout/CommonBankLayout';
import React from 'react';
import styles from './Main.module.css';
import NewsList from 'components/NewsList/NewsList';
import ServicesList from 'components/ServicesList/ServicesList';

const Main = () => {
  return (
    <CommonBankLayout>
      <div className={styles.content}>
        <NewsList />
        <ServicesList />
      </div>
    </CommonBankLayout>
  );
};

export default Main;
