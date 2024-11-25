import React from 'react';
import button from './Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    <button className={button.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
