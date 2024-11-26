import Card from 'components/Card/Card';
import styles from './MobileBankingPromo.module.css';
import React from 'react';
import logo2 from './../../../assets/images/mobile/logo-2.png';
import googlePlay from './../../../assets/images/mobile/googlePlay.png';
import appStore from './../../../assets/images/mobile/appStore.png';
const MobileBankingPromo = () => {
  return (
    <Card styles={{ maxWidth: '300px' }}>
      <div className={styles.promo}>
        <div className={styles.promoTop}>
          <div className={styles.logo2}>
            <img src={logo2} alt="" />
          </div>
          <div className={styles.promoTopText}>
            <h5 className={styles.promoTitle}>FONBET</h5>
            <span className={styles.promoSubtitle}>Скачайте мобильное приложение</span>
          </div>
        </div>
        <div className={styles.promoInfo}>
          Это удобный и безопасный способ управления вашими финансами. С помощью мобильного приложения вы можете легко управлять своими
          средствами без посещения отделения банка.
        </div>
        <div className={styles.promoApps}>
          <img className={styles.promoApp} src={googlePlay} alt="" />
          <img className={styles.promoApp} src={appStore} alt="" />
        </div>
      </div>
    </Card>
  );
};

export default MobileBankingPromo;
