import React, { useState } from 'react';
import styles from './Services.module.css';
import Modal from 'ui/Modal/Modal';
import ServicesList from './ServiceList/ServicesList';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Мои кредиты и вклады</h2>
      <div className={styles.inner}>
        <ServicesList setIsModalOpen={setIsModalOpen} />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Окно" />
    </div>
  );
};

export default Services;
