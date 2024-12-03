import React from 'react';
import styles from './TextArea.module.css';

const TextArea = ({ text, setText, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <textarea className={styles.textarea} onChange={(e) => setText(e.target.value)} value={text} {...props}></textarea>
    </div>
  );
};

export default TextArea;
