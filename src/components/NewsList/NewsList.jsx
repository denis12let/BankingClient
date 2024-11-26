// import React, { useState } from 'react';
// import styles from './NewsList.module.css';
// import News from 'components/NewsList/News/News';
// import { useDispatch, useSelector } from 'react-redux';
// import { remove } from 'store/reducers/newsSlice';

// const NewsList = () => {
//   const dispatch = useDispatch();
//   const news = useSelector((state) => state.news.news);

//   const removeNews = (id) => {
//     dispatch(remove(id));
//   };

//   const newsArray = news.map((item) => <News {...item} removeNews={removeNews} key={item.id} />);

//   return <div className={styles.newsList}>{newsArray}</div>;
// };

// export default NewsList;

import React, { useEffect } from 'react';
import styles from './NewsList.module.css';
import News from 'components/NewsList/News/News';
import { useDispatch, useSelector } from 'react-redux';
import { remove, fetchNews } from 'store/reducers/newsSlice';

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

  if (newsStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (newsStatus === 'failed') {
    return <div>Error: {error}</div>;
  }
  console.log(news);
  const newsArray = news.map((item) => <News {...item} removeNews={removeNews} key={item.id} />);

  return <div className={styles.newsList}>{newsArray}</div>;
};

export default NewsList;
