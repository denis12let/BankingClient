import { SERVICE_TRANSACTION_RUS } from 'constants/services';
import React, { useState } from 'react';
import CustomButton from 'ui/CustomButton/CustomButton';
import { generateDatesLastMonth } from 'utils/dateUtils';
import styles from './TransactionsFilter.module.css';
import Select from 'ui/Select/Select';
import Input from 'ui/Input/Input';

const TransactionsFilter = ({ setFilters, isOpen }) => {
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [type, setType] = useState();
  const [minSum, setMinSum] = useState();
  const [maxSum, setMaxSum] = useState();
  const [sortBy, setSortBy] = useState();

  const lastMonthDates = generateDatesLastMonth();
  const typesArray = [SERVICE_TRANSACTION_RUS.DEPOSIT, SERVICE_TRANSACTION_RUS.PAYMENT, SERVICE_TRANSACTION_RUS.TRANSFER];
  const sortedByList = ['По цене ↑', 'По цене ↓', 'По дате ↑', 'По дате ↓'];

  return (
    <div className={`${styles.filters} ${isOpen ? styles.open : ''}`}>
      <div className={`${styles.dateSelect} ${styles.group}`}>
        <small>Дата от</small>
        <Select name="dateFrom" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} options={lastMonthDates} />
      </div>
      <div className={`${styles.dateSelect} ${styles.group}`}>
        <small>Дата до</small>
        <Select name="dateTo" value={dateTo} onChange={(e) => setDateTo(e.target.value)} options={lastMonthDates} />
      </div>
      <div className={`${styles.typeSelect} ${styles.group}`}>
        <small>Тип</small>
        <Select name="type" value={type} onChange={(e) => setType(e.target.value)} options={typesArray} />
      </div>
      <div className={`${styles.amount} ${styles.group}`}>
        <small>Мин. сумма</small>
        <Input text={minSum} setText={setMinSum} />
      </div>
      <div className={`${styles.amount} ${styles.group}`}>
        <small>Макс. сумма</small>
        <Input text={maxSum} setText={setMaxSum} />
      </div>
      <div className={`${styles.sort} ${styles.group}`}>
        <small>Сортировать по</small>
        <Select name="sortedBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)} options={sortedByList} />
      </div>
      <CustomButton
        onClick={() => setFilters({ dateFrom, dateTo, type, minSum, maxSum, sortBy })}
        style={{ width: '100px', height: '35px' }}
      >
        Ок
      </CustomButton>
    </div>
  );
};

export default TransactionsFilter;
