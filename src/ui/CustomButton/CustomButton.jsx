import React from 'react';
import styles from './CustomButton.module.css';

const CustomButton = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
