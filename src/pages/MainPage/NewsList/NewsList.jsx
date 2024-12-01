import React, { useEffect } from 'react';
import styles from './NewsList.module.css';
import News from 'pages/MainPage/NewsList/News/News';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'store/reducers/bankReducers/newsSlice';
import { fetchAllNewsThunk } from 'store/actions';

const NewsList = () => {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);

  useEffect(() => {
    if (!news) {
      dispatch(fetchAllNewsThunk());
    }
  }, [dispatch]);

  const removeNews = (id) => {
    dispatch(remove(id));
  };

  const newsList = news.map((item) => <News {...item} removeNews={removeNews} key={item.id} />);

  return <>{newsList.length > 0 ? <div className={styles.newsList}>{newsList}</div> : <></>}</>;
};

export default NewsList;
