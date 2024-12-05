import React, { useState } from 'react';
import styles from './Input.module.css';
import openEye from './../../assets/icons/input/eye-open.svg';
import closeEye from './../../assets/icons/input/eye-close.svg';

const Input = ({ type, required = false, text, setText, pattern, patternOnChange, isCardNumber = false, isTelephone, ...props }) => {
  const [showText, setShowText] = useState(false);

  const toggleTextVisibility = () => {
    setShowText((prev) => !prev);
  };

  const formatCardNumber = (value) => {
    const rawValue = value.replace(/\D/g, '');
    return rawValue.match(/.{1,4}/g)?.join(' ') || '';
  };

  const formatTelephoneNumber = (value) => {
    const rawValue = value.replace(/\D/g, '').slice(3);

    let formatted = '+375';

    if (rawValue.length > 0) {
      formatted += ` (${rawValue.slice(0, 2)}`;
    }
    if (rawValue.length > 2) {
      formatted += `) ${rawValue.slice(2, 5)}`;
    }
    if (rawValue.length > 5) {
      formatted += `-${rawValue.slice(5, 7)}`;
    }
    if (rawValue.length > 7) {
      formatted += `-${rawValue.slice(7, 9)}`;
    }

    return formatted.trim();
  };

  const handleInputChange = (e) => {
    let value = e.target.value;

    if (!patternOnChange || new RegExp(patternOnChange).test(value) || value === '') {
      if (isCardNumber) {
        value = formatCardNumber(value);
      } else if (isTelephone) {
        value = formatTelephoneNumber(value);
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
