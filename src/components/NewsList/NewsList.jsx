import React, { useState } from 'react';
import styles from './NewsList.module.css';
import News from 'components/NewsList/News/News';

const NewsList = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      backgroundColor: 'black',
      title: 'School electrical qwertty',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio atque, qui magnam voluptate voluptas laudantium quod assumenda ea aut illum nam saepe deserunt veritatis illo minima incidunt sit magni excepturi.',
      img: '',
    },
    {
      id: 2,
      backgroundColor: 'red',
      title: 'PikPikPum',
      description: 'DTgyuirhgfkuygv yujgk eufgeku yge yjrgyugl bgKYU gkubg ukg ubeu sl',
      img: '',
    },
  ]);

  const removeNews = (id) => {
    const newNewsArray = news.filter((item) => item.id != id);
    setNews(newNewsArray);
  };

  const newsArray = news.map((item) => <News {...item} removeNews={removeNews} />);
  return <div className={styles.newsList}>{newsArray}</div>;
};

export default NewsList;
