import React, { useState } from 'react';
import styles from './Transactions.module.css';
import TransactionsList from './TransactionsList/TransactionsList';
import CustomButton from 'ui/CustomButton/CustomButton';

const Transactions = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h2 className={styles.title}>История операций</h2>
        <CustomButton onClick={() => setIsFilterOpen(!isFilterOpen)}>{isFilterOpen ? 'Закрыть фильтр' : 'Открыть фильтр'}</CustomButton>
      </div>
      <div className={styles.inner}>
        <TransactionsList isFilterOpen={isFilterOpen} />
      </div>
    </div>
  );
};

export default Transactions;
