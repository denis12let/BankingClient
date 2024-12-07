import React, { useEffect } from 'react';
import styles from './ServicesList.module.css';
import Service from './Service/Service';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBasketServiceThunk, fetchAllBasketServicesThunk, fetchCurrentUserAccountThunk } from 'store/actions';
import Loader from 'ui/Loader/Loader';
import { setBasketServices } from 'store/reducers/accountReducers/basketSlice';
import { SERVICE_TYPE_RUS } from 'constants/services';
import Empty from 'components/Empty/Empty';

const ServicesList = ({ setIsModalOpen, type }) => {
  const dispatch = useDispatch();
  const { basketServices, basketService, isLoading, error } = useSelector((state) => state.basket);

  useEffect(() => {
    const getKeyByValue = (obj, value) => {
      return Object.keys(obj).find((key) => obj[key] === value);
    };

    const convertedType = getKeyByValue(SERVICE_TYPE_RUS, type);

    dispatch(fetchAllBasketServicesThunk({ type: convertedType }));
  }, [type]);

  const deleteService = async (serviceData) => {
    try {
      await dispatch(deleteBasketServiceThunk(serviceData.id)).unwrap();
      dispatch(fetchCurrentUserAccountThunk());
      dispatch(setBasketServices(serviceData.id));
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const basketServicesList = basketServices.map((item) => (
    <Service key={item.createdAt} serviceData={item} isLoading={isLoading} deleteService={deleteService} />
  ));

  return <div className={styles.list}>{isLoading ? <Loader /> : basketServicesList.length === 0 ? <Empty /> : basketServicesList}</div>;
  // return <div className={styles.list}>{isLoading && !transactions.length ? <Loader /> : transactionsArray}</div>;
};

export default ServicesList;
