import React, { useEffect, useState } from 'react';
import styles from './AdminBank.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBankThunk, updateBankThunk } from 'store/actions';
import Loader from 'ui/Loader/Loader';
import AdminBankTab from './AdminBankTab/AdminBankTab';
import Modal from 'ui/Modal/Modal';

const AdminBank = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { bank, isLoading } = useSelector((state) => state.bank);
  const [error, setError] = useState();

  useEffect(() => {
    dispatch(fetchBankThunk());
  }, []);

  const saveHandler = async (name, telephoneNumber, img, description) => {
    try {
      await dispatch(updateBankThunk({ name, telephoneNumber, img, description })).unwrap();
      setError('');
      setIsModalOpen(true);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Настройки банка</h2>
      {isLoading && !bank ? <Loader /> : <AdminBankTab bank={bank} saveHandler={saveHandler} error={error} isLoading={isLoading} />}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Окно" />
    </div>
  );
};

export default AdminBank;
