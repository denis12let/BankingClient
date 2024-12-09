import React, { useEffect } from 'react';
import styles from './AdminServicesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteServiceThunk, fetchAllServicesThunk } from 'store/actions';
import Loader from 'ui/Loader/Loader';
import AdminService from './AdminService/AdminService';
import CustomButton from 'ui/CustomButton/CustomButton';
import { removeService } from 'store/reducers/bankReducers/serviceSlice';

const AdminServicesList = () => {
  const dispatch = useDispatch();
  const { services, isLoading } = useSelector((state) => state.service);

  useEffect(() => {
    dispatch(fetchAllServicesThunk());
  }, [dispatch]);

  const removePartner = (id) => {
    dispatch(deleteServiceThunk(id));
    dispatch(removeService(id));
  };

  const servicesList = services.map((item) => (
    <div className={styles.service}>
      <AdminService serviceData={item} {...item} key={item.id} />
      <CustomButton
        style={{ backgroundColor: 'transparent', border: '2px solid  #f73b3b', color: '#f73b3b' }}
        onClick={() => removePartner(item.id)}
      >
        Удалить
      </CustomButton>
    </div>
  ));

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>Список услуг</h2>
      {isLoading ? <Loader /> : <div className={styles.servicesList}>{servicesList}</div>}
    </div>
  );
};

export default AdminServicesList;
