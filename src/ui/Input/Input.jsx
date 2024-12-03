import React, { useState } from 'react';
import styles from './Input.module.css';
import openEye from './../../assets/icons/input/eye-open.svg';
import closeEye from './../../assets/icons/input/eye-close.svg';

const Input = ({ type, required = false, text, setText, pattern, patternOnChange, isCardNumber = false, ...props }) => {
  const [showText, setShowText] = useState(false);

  const toggleTextVisibility = () => {
    setShowText((prev) => !prev);
  };

  const formatCardNumber = (value) => {
    const rawValue = value.replace(/\D/g, '');
    return rawValue.match(/.{1,4}/g)?.join(' ') || '';
  };

  const handleInputChange = (e) => {
    let value = e.target.value;

    if (!patternOnChange || new RegExp(patternOnChange).test(value) || value === '') {
      if (isCardNumber) {
        value = formatCardNumber(value);
      }
      setText(value);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        {...props}
        pattern={pattern}
        required={required}
        onChange={handleInputChange}
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
