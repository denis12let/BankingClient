import React, { useEffect, useState } from 'react';
import styles from './AdminUsers.module.css';
import Modal from 'ui/Modal/Modal';
import AdminUser from './AdminUser/AdminUser';
import { useDispatch, useSelector } from 'react-redux';
import { createNewsThunk, fetchAllNewsThunk, fetchAllUsersThunk } from 'store/actions';

const AdminUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.user);
  const [error, setError] = useState();

  useEffect(() => {
    dispatch(fetchAllUsersThunk());
  }, [dispatch]);

  useEffect(() => {
    if (users.length > 0) {
      console.log('Список пользователей:', users);
    }
  }, [users]);

  const usersArray = users.length ? users.map((item) => <AdminUser key={item.number} user={item} />) : [];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Пользователи</h2>
      <div className={styles.inner}>{isLoading && !usersArray.length ? '' : usersArray}</div>
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Окно" /> */}
    </div>
  );
};

export default AdminUsers;
