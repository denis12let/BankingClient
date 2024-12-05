import React, { useState } from 'react';
import styles from './Services.module.css';
import Modal from 'ui/Modal/Modal';
import ServicesList from './ServiceList/ServicesList';
import Select from 'ui/Select/Select';
import { SERVICE_TYPE_RUS } from 'constants/services';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('Все');

  const typesArray = ['Все', SERVICE_TYPE_RUS.DEPOSIT, SERVICE_TYPE_RUS.LOAN];

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h2 className={styles.title}>Мои кредиты и вклады</h2>
        <div className={`${styles.typeSelect} ${styles.group}`}>
          <small>Тип</small>
          <Select name="type" value={type} onChange={(e) => setType(e.target.value)} options={typesArray} />
        </div>
      </div>
      <div className={styles.inner}>
        <ServicesList setIsModalOpen={setIsModalOpen} type={type} />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Окно" />
    </div>
  );
};

export default Services;
