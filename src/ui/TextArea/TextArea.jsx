import React from 'react';
import styles from './TextArea.module.css';

const TextArea = ({ text, setText, ...props }) => {
  return <textarea className={styles.textarea} onChange={(e) => setText(e.target.value)} value={text} {...props}></textarea>;
};

export default TextArea;
