import React, { useState } from 'react';
import styles from './AdminNews.module.css';
import Modal from 'ui/Modal/Modal';
import AdminNewsList from './AdminNewsList/AdminNewsList';
import AdminNewsForm from './AdminNewsForm/AdminNewsForm';
import { useDispatch, useSelector } from 'react-redux';
import { createNewsThunk, fetchAllNewsThunk } from 'store/actions';

const AdminNews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { news, isLoading } = useSelector((state) => state.news);
  const [error, setError] = useState();

  const addNewsHandler = async (title, backgroundColor, textColor, img, description) => {
    const newsData = { title, description, img };

    backgroundColor && (newsData.backgroundColor = backgroundColor);
    textColor && (newsData.textColor = textColor);

    try {
      await dispatch(createNewsThunk(newsData)).unwrap();
      setError('');
      setIsModalOpen(true);
      dispatch(fetchAllNewsThunk());
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Настройки новостей</h2>
      <div className={styles.inner}>
        <AdminNewsForm errors={error} isLoading={isLoading} addNewsHandler={addNewsHandler} />
        <AdminNewsList />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Окно" />
    </div>
  );
};

export default AdminNews;
