import Card from 'components/Card/Card';
import CommonBankLayout from 'components/CommonBankLayout/CommonBankLayout';
import React, { useEffect } from 'react';
import styles from './About.module.css';
import cardImg from 'assets/images/BGPB_MC_Standard.png';
import NavLinkItem from 'ui/Link/Link';
import arrowLeft from 'assets/icons/common/arrow-left.svg';
import { APP_ROUTES_PATH } from 'constants/app';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'ui/Loader/Loader';
import { fetchBankThunk } from 'store/actions';

const About = () => {
  const dispatch = useDispatch();
  const { bank, isLoading } = useSelector((state) => state.bank);

  useEffect(() => {
    if (!bank) {
      dispatch(fetchBankThunk());
    }
  }, [dispatch]);

  const blockStyle = {
    width: '100%',
    heigth: '100%',
  };
  return (
    <>
      {isLoading === true || bank === null ? (
        <Loader />
      ) : (
        <Card styles={blockStyle}>
          <div className={styles.wrapper}>
            <div className={styles.top}>
              <img src={bank.img || cardImg} className={styles.img} alt="" />
              <div className={styles.preview}>
                <h2 className={styles.title}>{bank.name}</h2>
                <div className={styles.info}>{bank.telephoneNumber}</div>
                <div className={styles.info}>Работаем ежедневно</div>
                <div className={styles.info}>Время работы банка: 9:00 - 19:00</div>
                <div className={styles.info}>Время работы поддержки: 8:00 - 22:00</div>
              </div>
            </div>
            <div className={styles.description}>{bank.description}</div>
            <div className={styles.returnBtn}>
              <NavLinkItem to={APP_ROUTES_PATH.ROOT}>
                <div className={styles.returnBtnInner}>
                  <img src={arrowLeft} className={styles.btnIcon} alt="" />
                  <span className={styles.btnText}>Вернуться на главную</span>
                </div>
              </NavLinkItem>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default About;
