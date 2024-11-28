import React from 'react';
import styles from './DefaultButton.module.css';

const DefaultButton = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default DefaultButton;
