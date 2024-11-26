import CurrencyTab from 'components/CommonBankLayout/CurrencyTab/CurrencyTab';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';
import styles from './CommonBankLayout.module.css';
import MobileBankingPromo from 'components/CommonBankLayout/MobileBankingPromo/MobileBankingPromo';

const CommonBankLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <aside>
          <CurrencyTab />
          <MobileBankingPromo />
        </aside>
        <section className={styles.section}>{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default CommonBankLayout;
