import React, { useEffect } from 'react';
import styles from './ServicesList.module.css';
import Service from './Service/Service';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBasketServiceThunk, fetchAllBasketServicesThunk, fetchOneServiceByIdThunk } from 'store/actions';
import Loader from 'ui/Loader/Loader';

const ServicesList = ({ setIsModalOpen }) => {
  const dispatch = useDispatch();
  const { basketServices, isLoading, error } = useSelector((state) => state.basket);
  const { service } = useSelector((state) => state.service);

  useEffect(() => {
    dispatch(fetchAllBasketServicesThunk());
  }, []);

  const deleteService = (serviceData) => {
    dispatch(deleteBasketServiceThunk(serviceData.id));
    setIsModalOpen(true);
  };

  const basketServicesList = basketServices.map((item) => (
    <Service key={item.createdAt} serviceData={item} isLoading={isLoading} deleteService={deleteService} />
  ));

  return <div className={styles.list}>{isLoading ? <Loader /> : basketServicesList}</div>;
  // return <div className={styles.list}>{isLoading && !transactions.length ? <Loader /> : transactionsArray}</div>;
};

export default ServicesList;
