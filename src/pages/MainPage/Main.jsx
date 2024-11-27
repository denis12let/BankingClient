import CommonBankLayout from 'components/CommonBankLayout/CommonBankLayout';
import React from 'react';
import styles from './Main.module.css';
import NewsList from 'components/NewsList/NewsList';
import PartnersList from 'components/PartnersList/PartnersList';

const Main = () => {
  return (
    <CommonBankLayout>
      <div className={styles.content}>
        <NewsList />
        <PartnersList />
      </div>
    </CommonBankLayout>
  );
};

export default Main;
