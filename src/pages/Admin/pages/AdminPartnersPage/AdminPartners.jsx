import React, { useState } from 'react';
import styles from './AdminPartners.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'ui/Modal/Modal';
import AdminPartnersForm from './AdminPartnersForm/AdminPartnersForm';
import AdminPartnersList from './AdminPartnersList/AdminPartnersList';
import { createPartnerThunk, fetchAllPartnersThunk } from 'store/actions';

const AdminPartners = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { partners, isLoading } = useSelector((state) => state.partner);
  const [error, setError] = useState();

  const addPartnerHandler = async (title, titleDescription, telephoneNumber, img, description) => {
    const partnerData = { title, titleDescription, telephoneNumber, img, description };

    try {
      await dispatch(createPartnerThunk(partnerData)).unwrap();
      setError('');
      setIsModalOpen(true);
      dispatch(fetchAllPartnersThunk());
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Настройки рекламы</h2>
      <div className={styles.inner}>
        <AdminPartnersForm errors={error} isLoading={isLoading} addPartnerHandler={addPartnerHandler} />
        <AdminPartnersList />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Окно" />
    </div>
  );
};

export default AdminPartners;
