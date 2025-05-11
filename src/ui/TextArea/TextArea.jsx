import React from 'react';
import styles from './TextArea.module.css';
import { THEME, useTheme } from 'context';

const TextArea = ({ text, setText, ...props }) => {
  const { theme } = useTheme();

  return (
    <textarea
      className={`${styles.textarea} ${theme === THEME.LIGHT ? styles.light : styles.dark}`}
      onChange={(e) => setText(e.target.value)}
      value={text}
      {...props}
    ></textarea>
  );
};

export default TextArea;
