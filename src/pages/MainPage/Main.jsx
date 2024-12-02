import CommonBankLayout from 'components/CommonBankLayout/CommonBankLayout';
import React, { useState } from 'react';
import styles from './Main.module.css';
import PartnersList from './PartnersList/PartnersList';
import NewsList from './NewsList/NewsList';
import Modal from 'ui/Modal/Modal';

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
