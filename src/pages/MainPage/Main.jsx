import CommonBankLayout from 'components/CommonBankLayout/CommonBankLayout';
import React, { useState } from 'react';
import styles from './Main.module.css';
import PartnersList from './PartnersList/PartnersList';
import NewsList from './NewsList/NewsList';
import Modal from 'ui/Modal/Modal';

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <CommonBankLayout>
      <button onClick={() => setIsModalOpen(true)}>Открыть модальное окно</button>

      <div className={styles.content}>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Окно" />
        <NewsList />
        <PartnersList />
      </div>
    </CommonBankLayout>
  );
};

export default Main;
