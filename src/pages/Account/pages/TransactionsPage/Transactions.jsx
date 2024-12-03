import React from 'react';
import styles from './Transactions.module.css';
import TransactionsList from './TransactionsList/TransactionsList';

const Transactions = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>История операций</h2>
      <div className={styles.inner}>
        <TransactionsList />
      </div>
    </div>
  );
};

export default Transactions;
