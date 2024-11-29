import React, { useEffect } from 'react';
import styles from './PartnersList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPartnersThunk } from 'store/actions/bankActions/partnerActions';
import Loader from 'ui/Loader/Loader';
import Partner from './Partner/Partner';

const PartnersList = () => {
  const dispatch = useDispatch();
  const { partners, isLoading, error } = useSelector((state) => state.partners);

  useEffect(() => {
    dispatch(getPartnersThunk());
  }, []);

  const partnersList = partners.map((item) => <Partner {...item} key={item.id} />);

  return <div className={styles.list}>{isLoading === true ? <Loader /> : partnersList}</div>;
};

export default PartnersList;
