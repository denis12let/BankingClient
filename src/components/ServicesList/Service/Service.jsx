import Card from 'components/Card/Card';
import React from 'react';
import styles from './Service.module.css';
import cardImg from './../../../assets/images/BGPB_MC_Standard.png';
import arrow from './../../../assets/icons/common/arrow-right.svg';

const Service = ({ style, props }) => {
  const stylesValues = {
    width: '100%',
    maxWidth: '430px',
    ...style,
  };

  return (
    <Card styles={stylesValues}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h5>MY WORLD</h5>
        </div>
        <div className={styles.inner}>
          <img src={cardImg} className={styles.img} alt="" />
          <div className={styles.info}>
            <div className={styles.infoTitle}>Экономьте деньги, а не топливо</div>
            <div className={styles.infoSubtitle}>ТекстТекст ТекстТекст ТекстТекст</div>
          </div>
        </div>
        <div className={styles.openBtn}>
          <span className={styles.btnText}>Подробнее</span>
          <img src={arrow} className={styles.btnIcon} alt="" />
        </div>
      </div>
    </Card>
  );
};

export default Service;
