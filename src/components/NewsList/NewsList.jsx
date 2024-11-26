import React, { useEffect } from 'react';
import styles from './NewsList.module.css';
import News from 'components/NewsList/News/News';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'store/reducers/newsSlice';
import Loader from 'components/Loader/Loader';
import { FETCH_STATUS } from 'constants/fetchStatus';
import { fetchNews } from 'store/actions/newsActions';

const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const newsStatus = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);
  useEffect(() => {
    if (newsStatus === 'idle') {
      dispatch(fetchNews()); // Загружаем новости, если статус idle
    }
  }, [newsStatus, dispatch]);

  const removeNews = (id) => {
    dispatch(remove(id));
  };

  const newsArray = news.map((item) => <News {...item} removeNews={removeNews} key={item.id} />);

  return <div className={styles.newsList}>{newsStatus !== FETCH_STATUS.SECCEEDED ? <Loader /> : newsArray}</div>;
};

export default NewsList;
