import Card from 'components/Card/Card';
import React from 'react';
import styles from './Partner.module.css';
import cardImg from './../../../../assets/images/BGPB_MC_Standard.png';
import arrowRigth from './../../../../assets/icons/common/arrow-right.svg';
import NavLinkItem from 'ui/Link/Link';
import { APP_ROUTES_PATH } from 'constants/app';

const Partner = ({ style, ...props }) => {
  const stylesValues = {
    width: '100%',
    maxWidth: '430px',
    ...style,
  };
  return (
    <Card styles={stylesValues}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h5>{props.title}</h5>
        </div>
        <div className={styles.inner}>
          <img src={props.img || cardImg} className={styles.img} alt="" />
          <div className={styles.info}>
            <div className={styles.infoTitle}>{props.titleDescription}</div>
            <div className={styles.infoSubtitle}>{props.telephoneNumber}</div>
          </div>
        </div>
        <div className={styles.openBtn}>
          <NavLinkItem to={APP_ROUTES_PATH.PARTNER + `${props.id}`}>
            <div className={styles.openBtnInner}>
              <span className={styles.btnText}>Подробнее</span>
              <img src={arrowRigth} className={styles.btnIcon} alt="" />
            </div>
          </NavLinkItem>
        </div>
      </div>
    </Card>
  );
};

export default Partner;
