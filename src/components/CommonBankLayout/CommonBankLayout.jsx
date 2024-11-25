import CurrencyTab from 'components/CurrencyTab/CurrencyTab';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';
import styles from './CommonBankLayout.module.css';

const CommonBankLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <aside>
          <CurrencyTab />
        </aside>
        <section className="content">{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default CommonBankLayout;
