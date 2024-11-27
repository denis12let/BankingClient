import React, { useEffect } from 'react';
import Partner from './Partner/Partner';
import styles from './PartnersList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_STATUS } from 'constants/fetchStatus';
import { getPartnersThunk } from 'store/actions/partnersActions';
import Loader from 'ui/Loader/Loader';

const PartnersList = () => {
  const dispatch = useDispatch();
  const partners = useSelector((state) => state.partners.partners);
  const partnersStatus = useSelector((state) => state.partners.status);

  useEffect(() => {
    if (partnersStatus === FETCH_STATUS.IDLE) {
      dispatch(getPartnersThunk());
    }
  }, [partnersStatus, dispatch]);

  const partnersList = partners.map((item) => <Partner {...item} key={item.id} />);

  console.log(partnersList);
  return <div className={styles.list}>{partnersStatus !== FETCH_STATUS.SECCEEDED ? <Loader /> : partnersList}</div>;
};

export default PartnersList;
