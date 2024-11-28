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
  const { news, isLoading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);

  const removeNews = (id) => {
    dispatch(remove(id));
  };

  const newsList = news.map((item) => <News {...item} removeNews={removeNews} key={item.id} />);

  return <div className={styles.newsList}>{isLoading === true ? <Loader /> : newsList}</div>;
};

export default NewsList;
