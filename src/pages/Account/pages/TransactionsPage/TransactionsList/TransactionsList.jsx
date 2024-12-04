import { useDispatch, useSelector } from 'react-redux';
import Transaction from './Transaction/Transaction';
import styles from './TransactionsList.module.css';
import React, { useEffect, useState } from 'react';
import Loader from 'ui/Loader/Loader';
import { deleteTransactionThunk, fetchAllCurrentUserTransactionsThunk } from 'store/actions';
import TransactionsFilter from './TransactionsFilter/TransactionsFilter';

const TransactionsList = ({ isFilterOpen }) => {
  const dispatch = useDispatch();

  const { transaction, transactions, isLoading, error } = useSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(fetchAllCurrentUserTransactionsThunk());
  }, []);

  const deleteTransaction = (id) => {
    dispatch(deleteTransactionThunk(id));
  };

  const setFilters = (filters) => {
    let { sortBy } = filters;
    filters.sortBy = sortBy === 'По цене ↑' || sortBy === 'По цене ↓' ? 'amount' : 'date';
    filters.sortOrder = sortBy === 'По цене ↑' || sortBy === 'По дате ↑' ? 'asc' : 'desc';
    console.log(filters);
    dispatch(fetchAllCurrentUserTransactionsThunk(filters));
  };

  const transactionsArray = transactions.map((item) => <Transaction key={item.id} {...item} deleteTransaction={deleteTransaction} />);

  return (
    <div className={styles.transactions}>
      <TransactionsFilter setFilters={setFilters} isOpen={isFilterOpen} />
      <div className={styles.list}>{isLoading && !transactions.length ? <Loader /> : transactionsArray}</div>
    </div>
  );
};

export default TransactionsList;
