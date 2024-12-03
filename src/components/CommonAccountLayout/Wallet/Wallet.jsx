import React, { useEffect } from 'react';
import styles from './Wallet.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUserAccountThunk } from 'store/actions';

const Wallet = () => {
  const dispatch = useDispatch();
  const { balance, isLoading, error } = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(fetchCurrentUserAccountThunk());
  }, []);

  return (
    <div className={styles.wallet}>
      Кошелек: <span>{balance}</span> BYN
    </div>
  );
};

export default Wallet;
