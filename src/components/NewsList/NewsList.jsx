import React, { useEffect } from 'react';
import styles from './NewsList.module.css';
import News from 'components/NewsList/News/News';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'store/reducers/newsSlice';
import { getNewsThunk } from 'store/actions/newsActions';

const NewsList = () => {
  const dispatch = useDispatch();
  const { news, isLoading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);

  const removeNews = (id) => {
    dispatch(remove(id));
  };

  const newsList = news.map((item) => <News {...item} removeNews={removeNews} key={item.id} />);

  return <>{newsList.length > 0 ? <div className={styles.newsList}>{newsList}</div> : <></>}</>;
};

export default NewsList;
