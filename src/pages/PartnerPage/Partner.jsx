import Card from 'components/Card/Card';
import CommonBankLayout from 'components/CommonBankLayout/CommonBankLayout';
import React, { useEffect } from 'react';
import styles from './Partner.module.css';
import cardImg from './../../assets/images/BGPB_MC_Standard.png';
import NavLinkItem from 'ui/Link/Link';
import arrowLeft from './../../assets/icons/common/arrow-left.svg';
import { APP_ROUTES_PATH } from 'constants/app';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from 'ui/Loader/Loader';
import { fetchOnePartnerByIdThunk } from 'store/actions';

const Partner = () => {
  const dispatch = useDispatch();
  const { partner, isLoading, error } = useSelector((state) => state.partners);

  const { id } = useParams();

  useEffect(() => {
    if (!partner) {
      dispatch(fetchOnePartnerByIdThunk(id));
    }
  }, [id, dispatch]);

  const blockStyle = {
    width: '100%',
    heigth: '100%',
  };

  return (
    <CommonBankLayout>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {isLoading === true || partner === null ? (
          <Loader />
        ) : (
          <Card styles={blockStyle}>
            <div className={styles.wrapper}>
              <div className={styles.top}>
                <img src={partner.img || cardImg} className={styles.img} alt="" />
                <div className={styles.preview}>
                  <h2 className={styles.title}>{partner.title}</h2>
                  <div className={styles.telephoneNumber}>{partner.telephoneNumber}</div>
                </div>
              </div>
              <div className={styles.description}>{partner.description}</div>
              <div className={styles.returnBtn}>
                <NavLinkItem to={APP_ROUTES_PATH.MAIN}>
                  <div className={styles.returnBtnInner}>
                    <img src={arrowLeft} className={styles.btnIcon} alt="" />
                    <span className={styles.btnText}>Вернуться на главную</span>
                  </div>
                </NavLinkItem>
              </div>
            </div>
          </Card>
        )}
      </div>
    </CommonBankLayout>
  );
};

export default Partner;
