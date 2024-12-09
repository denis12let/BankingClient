import React, { useEffect } from 'react';
import styles from './AdminPartnersList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Partner from 'pages/Main/pages/MainPage/PartnersList/Partner/Partner';
import Loader from 'ui/Loader/Loader';
import { deletePartnerThunk, fetchAllPartnersThunk } from 'store/actions';
import { removeOnePartner } from 'store/reducers/bankReducers/partnersSlice';
import CustomButton from 'ui/CustomButton/CustomButton';

const AdminPartnersList = () => {
  const dispatch = useDispatch();
  const { partners, isLoading } = useSelector((state) => state.partner);

  useEffect(() => {
    dispatch(fetchAllPartnersThunk());
  }, [dispatch]);

  const removeNews = (id) => {
    dispatch(deletePartnerThunk(id));
    dispatch(removeOnePartner(id));
  };

  const partnersList = partners.map((item) => (
    <div className={styles.partner}>
      <Partner {...item} key={item.id} />
      <CustomButton
        style={{ backgroundColor: 'transparent', border: '2px solid  #f73b3b', color: '#f73b3b' }}
        onClick={() => removeNews(item.id)}
      >
        Удалить
      </CustomButton>
    </div>
  ));

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>Список новостей</h2>
      {isLoading ? <Loader /> : <div className={styles.partnersList}> {partnersList}</div>}
    </div>
  );
};

export default AdminPartnersList;
