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
import { getPartnerThunk } from 'store/actions/partnersActions';
import { FETCH_STATUS } from 'constants/fetchStatus';
import Loader from 'ui/Loader/Loader';

const Partner = () => {
  const dispatch = useDispatch();
  const partner = useSelector((state) => state.partners.partner);
  const partnerStatus = useSelector((state) => state.partners.status);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getPartnerThunk(id));
    }
  }, [id]);

  const blockStyle = {
    width: '100%',
    heigth: '100%',
  };
  console.log(partner, partnerStatus);
  return (
    <CommonBankLayout>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {partnerStatus !== FETCH_STATUS.SECCEEDED ? (
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
