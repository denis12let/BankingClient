import React, { useEffect, useState } from 'react';
import BankService from './BankService/BankService';
import styles from './BankServicesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBasketServiceThunk, fetchAllServicesThunk, fetchCurrentUserAccountThunk } from 'store/actions';
import Loader from 'ui/Loader/Loader';
import { SERVICE_TYPE } from 'constants/services';
import Modal from 'ui/Modal/Modal';

const BankServices = ({ type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { services, isLoading: isLoadingServices } = useSelector((state) => state.service);
  const { basketService, isLoading: isLoadingBasket, error } = useSelector((state) => state.basket);
  const { balance } = useSelector((state) => state.account);

  const [amount, setAmount] = useState('');
  const [minSum, setMinSum] = useState('');

  useEffect(() => {
    dispatch(fetchAllServicesThunk());
    dispatch(fetchCurrentUserAccountThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCurrentUserAccountThunk());
  }, [basketService]);

  const addServiceHandler = async (serviceData) => {
    try {
      console.log(serviceData);
      await dispatch(addBasketServiceThunk({ ...serviceData, amount })).unwrap();
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const servicesList = services.map(
    (item) =>
      item.type === type && (
        <BankService
          key={item.name + item.interest}
          serviceData={item}
          balance={balance}
          addServiceHandler={addServiceHandler}
          isLoadingServices={isLoadingServices}
          isLoadingBasket={isLoadingBasket}
          amount={amount}
          setAmount={setAmount}
        />
      )
  );

  return (
    <div className={styles.deposits}>
      <div className={styles.top}>
        <h2 className={styles.title}>{type === SERVICE_TYPE.DEPOSIT ? 'Вклады' : 'Кредиты'}</h2>
        <p className={styles.balance}>
          Баланс аккаунта: <span>{balance} BYN</span>{' '}
        </p>
      </div>
      <div className={styles.list}>{isLoadingServices ? <Loader /> : servicesList}</div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Окно" />
    </div>
  );
};

export default BankServices;
