import React from 'react';
import Service from './Service/Service';
import styles from './ServicesList.module.css';

const ServicesList = () => {
  return (
    <div className={styles.list}>
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
    </div>
  );
};

export default ServicesList;
