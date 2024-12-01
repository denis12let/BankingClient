import React, { useEffect } from 'react';
import styles from './PartnersList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'ui/Loader/Loader';
import Partner from './Partner/Partner';
import { fetchAllPartnersThunk } from 'store/actions';

const PartnersList = () => {
  const dispatch = useDispatch();
  const { partners, isLoading } = useSelector((state) => state.partners);

  useEffect(() => {
    if (!partners) {
      dispatch(fetchAllPartnersThunk());
    }
  }, [dispatch]);

  const partnersList = partners.map((item) => <Partner {...item} key={item.id} />);

  return <div className={styles.list}>{isLoading === true ? <Loader /> : partnersList}</div>;
};

export default PartnersList;
