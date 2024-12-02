import React from 'react';
import styles from './Modal.module.css';
import check from 'assets/check.gif';
import CustomButton from 'ui/CustomButton/CustomButton';

const Modal = ({ isOpen, onClose, error }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{error ? 'Ошибка!' : 'Успешно!'}</h2>
          <button className={styles.closeButton} onClick={onClose}></button>
        </div>
        <div className={styles.content}>
          {error ? (
            <div className={`${styles.content__inner} ${styles.error}`}>{error}</div>
          ) : (
            <img className={styles.content__inner} src={check} alt="" />
          )}
          <CustomButton onClick={onClose}>Закрыть</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
