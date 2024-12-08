import React, { useEffect } from 'react';
import styles from './AdminNewsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import News from 'pages/Main/pages/MainPage/NewsList/News/News';
import { deleteNewsThunk, fetchAllNewsThunk } from 'store/actions';
import Loader from 'ui/Loader/Loader';
import { remove } from 'store/reducers/bankReducers/newsSlice';

const AdminNewsList = () => {
  const dispatch = useDispatch();
  const { news, isLoading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchAllNewsThunk());
  }, [dispatch]);

  const removeNews = (id) => {
    dispatch(deleteNewsThunk(id));
    dispatch(remove(id));
  };

  const newsList = news.map((item) => <News {...item} removeNews={removeNews} key={item.id} />);

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>Список новостей</h2>
      {isLoading ? <Loader /> : <div className={styles.newsList}>{newsList}</div>}
    </div>
  );
};

export default AdminNewsList;
