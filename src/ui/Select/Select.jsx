import React, { useState, useEffect, useRef } from 'react';
import styles from './Select.module.css';
import { THEME, useTheme } from 'context';

const Select = ({ options, value, onChange, name, placeholder, required = false, ...props }) => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const handleOptionClick = (option) => {
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles.wrapper} ${theme === THEME.LIGHT ? styles.light : styles.dark}`} ref={wrapperRef} {...props}>
      <div
        className={`${styles.selected} ${isOpen ? styles.selectedOpen : ''} ${required && !value ? styles.required : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {value || <p className={styles.placeholder}>{placeholder}</p>}
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option, index) => (
            <div key={`${option}#${index}`} className={styles.option} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
