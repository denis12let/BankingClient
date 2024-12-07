import React, { useEffect } from 'react';
import styles from './AccountStatement.module.css';
import AccountStatementInfo from './AccountStatementInfo/AccountStatementInfo';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllBasketServicesThunk,
  fetchAllCurrentUserCardsThunk,
  fetchAllCurrentUserTransactionsThunk,
  fetchCurrentUserAccountThunk,
  fetchCurrentUserThunk,
} from 'store/actions';
import Loader from 'ui/Loader/Loader';

const AccountStatement = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { balance } = useSelector((state) => state.account);
  const { transactions } = useSelector((state) => state.transaction);
  const { cards } = useSelector((state) => state.card);
  const { basketServices, isLoading } = useSelector((state) => state.basket);

  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
    dispatch(fetchCurrentUserAccountThunk());
    dispatch(fetchAllCurrentUserTransactionsThunk());
    dispatch(fetchAllCurrentUserCardsThunk());
    dispatch(fetchAllBasketServicesThunk());
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Информация о счете</h2>
      {isLoading || !user ? (
        <Loader />
      ) : (
        <AccountStatementInfo user={user} balance={balance} transactions={transactions} cards={cards} basketServices={basketServices} />
      )}
    </div>
  );
};

export default AccountStatement;
