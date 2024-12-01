import React, { useEffect } from 'react';
import BankService from './BankService/BankService';
import styles from './BankServicesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllServicesThunk } from 'store/actions';
import Loader from 'ui/Loader/Loader';

const BankServices = ({ type }) => {
  const dispatch = useDispatch();
  const { services, isLoading, error } = useSelector((state) => state.service);

  useEffect(() => {
    if (!services.length) {
      dispatch(fetchAllServicesThunk());
    }
  }, [dispatch]);

  const servicesList = services.map(
    (item) =>
      item.type === type && (
        <BankService
          key={item.name + item.interest}
          name={item.name}
          minSum={item.minSum}
          interest={item.interest}
          duration={item.duration}
          type={item.type}
        />
      )
  );

  return (
    <div className={styles.deposits}>
      <h2 className={styles.title}>Вклады</h2>
      <div className={styles.list}>{isLoading ? <Loader /> : servicesList}</div>
    </div>
  );
};

export default BankServices;
