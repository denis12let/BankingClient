import React, { useState } from 'react';
import styles from './AdminServices.module.css';
import Modal from 'ui/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import AdminServicesForm from './AdminServicesForm/AdminServicesForm';
import AdminServicesList from './AdminServicesList/AdminServicesList';
import { createServiceThunk, fetchAllServicesThunk } from 'store/actions';
import { SERVICE_TYPE, SERVICE_TYPE_RUS } from 'constants/services';

const AdminServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { partners, isLoading } = useSelector((state) => state.partner);
  const [error, setError] = useState();

  const addServiceHandler = async (name, interest, duration, minSum, type) => {
    const serviceData = { name, interest, duration, minSum, type };
    if (!name || !interest || !duration || !minSum || !type) {
      setError('Не все поля заполнены');
      return;
    }

    serviceData.type = type === SERVICE_TYPE_RUS.DEPOSIT ? SERVICE_TYPE.DEPOSIT : SERVICE_TYPE.LOAN;
    try {
      await dispatch(createServiceThunk(serviceData)).unwrap();
      setError('');
      setIsModalOpen(true);
      dispatch(fetchAllServicesThunk());
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Настройки услуг</h2>
      <div className={styles.inner}>
        <AdminServicesForm errors={error} isLoading={isLoading} addServiceHandler={addServiceHandler} />
        <AdminServicesList />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Окно" />
    </div>
  );
};

export default AdminServices;
