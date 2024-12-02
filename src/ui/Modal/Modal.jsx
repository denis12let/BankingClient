import React from 'react';
import styles from './Modal.module.css';
import closeBtn from 'assets/icons/common/close.svg';
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}></button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
