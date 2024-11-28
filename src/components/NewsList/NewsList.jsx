import React, { useEffect } from 'react';
import styles from './NewsList.module.css';
import News from 'components/NewsList/News/News';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'store/reducers/newsSlice';
import Loader from 'ui/Loader/Loader';
import { FETCH_STATUS } from 'constants/fetchStatus';
import { getNewsThunk } from 'store/actions/newsActions';

const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const newsStatus = useSelector((state) => state.news.status);

  useEffect(() => {
    if (newsStatus === FETCH_STATUS.IDLE) {
      dispatch(getNewsThunk());
    }
  }, [newsStatus]);

  const removeNews = (id) => {
    dispatch(remove(id));
  };

  const newsList = news.map((item) => <News {...item} removeNews={removeNews} key={item.id} />);

  return <div className={styles.newsList}>{newsStatus !== FETCH_STATUS.SECCEEDED ? <Loader /> : newsList}</div>;
};

export default NewsList;
