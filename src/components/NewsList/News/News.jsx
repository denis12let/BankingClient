import Card from 'components/Card/Card';
import React, { useState } from 'react';
import styles from './News.module.css';
import closeBtn from './../../../assets/icons/common/close.svg';
import someImg from './../../../assets/images/mobile/logo-2.png';

const News = ({ removeNews, ...props }) => {
  //сделать условие на картинку, так как в css на newInfo поставлен gap между картинкой и текстом, потому если картинка пустая, то будет просто отступ справа большой, потому нужно убрать картинку как элемент дерева

  const startValues = {
    width: '100%',
    backgroundColor: '#E96551',
    ...props,
  };

  return (
    <Card styles={startValues}>
      <div className={styles.newsWrapper}>
        <div className={styles.newsInner}>
          <h3 className={styles.newsTitle}>{props.title}</h3>
          <div className={styles.newsInfo}>
            <div className="">
              <p className={styles.newsText}>{props.description}</p>
            </div>
            <img src={props.img} className={styles.newsImg} alt="" />
          </div>
        </div>
        <img src={closeBtn} className={styles.newsBtnClose} onClick={() => removeNews(props.id)} alt="" />
      </div>
    </Card>
  );
};

export default News;
