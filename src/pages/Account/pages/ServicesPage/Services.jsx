import React, { useState } from 'react';
import styles from './Services.module.css';
import Modal from 'ui/Modal/Modal';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Мои кредиты и вклады</h2>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Окно" />
    </div>
  );
};

export default Services;
