import CurrencyTab from 'components/CommonBankLayout/CurrencyTab/CurrencyTab';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';
import styles from './CommonBankLayout.module.css';
import MobileBankingPromo from 'components/CommonBankLayout/MobileBankingPromo/MobileBankingPromo';
import { THEME, useTheme } from 'context';

const CommonBankLayout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.wrapper} ${theme === THEME.LIGHT ? styles.light : styles.dark}`}>
      <Header />
      <main className={styles.main}>
        <aside className={styles.bankAside}>
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
