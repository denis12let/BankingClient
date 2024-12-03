import { useDispatch, useSelector } from 'react-redux';
import Transaction from './Transaction/Transaction';
import styles from './TransactionsList.module.css';

import React, { useEffect, useState } from 'react';
import Loader from 'ui/Loader/Loader';
import { deleteTransactionThunk, fetchAllCurrentUserTransactionsThunk } from 'store/actions';
import { setTransactions } from 'store/reducers/accountReducers/transactionSlice';

const TransactionsList = () => {
  const dispatch = useDispatch();
  const { transaction, transactions, isLoading, error } = useSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(fetchAllCurrentUserTransactionsThunk());
  }, []);

  const deleteTransaction = async (id) => {
    try {
      await dispatch(deleteTransactionThunk(id)).unwrap();
      dispatch(setTransactions(id));
    } catch (error) {
      console.log(error);
    }
  };

  const transactionsArray = transactions.map((item) => <Transaction key={item.id} {...item} deleteTransaction={deleteTransaction} />);

  return <div className={styles.list}>{isLoading && !transactions.length ? <Loader /> : transactionsArray}</div>;
};

export default TransactionsList;
