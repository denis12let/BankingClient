import React, { useState } from 'react';
import styles from './Input.module.css';
import openEye from './../../assets/icons/input/eye-open.svg';
import closeEye from './../../assets/icons/input/eye-close.svg';

const Input = ({ type, required = false, text, setText, ...props }) => {
  const [showText, setShowText] = useState(false);

  const toggleTextVisibility = () => {
    setShowText((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        {...props}
        required={required}
        onChange={(e) => setText(e.target.value)}
        type={type === 'password' && !showText ? 'password' : 'text'}
        value={text}
      />
      {type === 'password' && (
        <span className={styles.eyeIcon} onClick={toggleTextVisibility}>
          <img src={showText ? openEye : closeEye} className={styles.eyeIconImg} alt="" />
        </span>
      )}
    </div>
  );
};

export default Input;
