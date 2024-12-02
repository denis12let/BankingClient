import React, { useState, useEffect, useRef } from 'react';
import styles from './Select.module.css';

const Select = ({ options, value, onChange, name, placeholder, required = false, ...props }) => {
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
    <div className={styles.wrapper} ref={wrapperRef} {...props}>
      <div
        className={`${styles.selected} ${isOpen ? styles.selectedOpen : ''} ${required && !value ? styles.required : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {value || placeholder}
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div key={option} className={styles.option} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
