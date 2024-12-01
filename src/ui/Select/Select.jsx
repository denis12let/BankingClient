import React, { useState } from 'react';
import styles from './Select.module.css';

const Select = ({ options, value, onChange, name, placeholder, required = false, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper} {...props}>
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

//   return (
//     <div className={styles.wrapper}>
//       <select name={name} value={value} onChange={onChange} required={required} className={styles.select}>
//         <option value="" disabled>
//           {placeholder}
//         </option>
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

export default Select;
