import Card from 'components/Card/Card';
import React, { useState } from 'react';
import styles from './News.module.css';
import closeBtn from './../../../assets/icons/common/close.svg';

const News = ({ removeNews, ...props }) => {
  const stylesValues = {
    width: '100%',
    ...props,
  };

  return (
    <Card styles={stylesValues}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <h3 className={styles.title}>{props.title}</h3>
          <div className={styles.info}>
            <div className="">
              <p className={styles.text}>{props.description}</p>
            </div>
            <img src={props.img} className={styles.img} alt="" />
          </div>
        </div>
        <img src={closeBtn} className={styles.btnClose} onClick={() => removeNews(props.id)} alt="" />
      </div>
    </Card>
  );
};

export default News;
