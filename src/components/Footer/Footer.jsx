import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        <a href="/privacy-policy">Политика конфиденциальности</a> | <a href="/terms">Пользовательское соглашение</a>
      </p>
      <p className={styles.contacts}>Контакты: +375 (44) 123 12 23</p>
      <p>© 2024 Fonbet. Все права защищены.</p>
    </div>
  );
};

export default Footer;
