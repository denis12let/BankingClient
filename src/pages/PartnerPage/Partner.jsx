import Card from 'components/Card/Card';
import CommonBankLayout from 'components/CommonBankLayout/CommonBankLayout';
import React from 'react';
import styles from './Partner.module.css';
import cardImg from './../../assets/images/BGPB_MC_Standard.png';
import NavLinkItem from 'ui/Link/Link';
import arrowLeft from './../../assets/icons/common/arrow-left.svg';
import { APP_ROUTES_PATH } from 'constants/app';

const Partner = () => {
  const blockStyle = {
    width: '100%',
    heigth: '100%',
  };

  return (
    <CommonBankLayout>
      <Card styles={blockStyle}>
        <div className={styles.partnerWrapper}>
          <div className={styles.partnerTop}>
            <img src={cardImg} className={styles.img} alt="" />
            <div className={styles.preview}>
              <h2 className={styles.title}>Title</h2>
              <div className={styles.telephoneNumber}>+1234567876543</div>
            </div>
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil voluptas pariatur reprehenderit natus distinctio porro sed?
            Excepturi, eius illo, architecto quod culpa est, provident perferendis aspernatur totam tempora omnis.
          </div>

          <div className={styles.returnBtn}>
            <NavLinkItem to={APP_ROUTES_PATH.MAIN}>
              <div className={styles.returnBtnInner}>
                <span className={styles.btnText}>Вернуться на главную</span>
                <img src={arrowLeft} className={styles.btnIcon} alt="" />
              </div>
            </NavLinkItem>
          </div>
        </div>
      </Card>
    </CommonBankLayout>
  );
};

export default Partner;
