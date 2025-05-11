import React from 'react';
import styles from './CommonAccountLayout.module.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import UserCardsList from './UserCardsList/UserCardsList';
import AccountNavBar from './AccountNavBar/AccountNavBar';
import Wallet from './Wallet/Wallet';
import { THEME, useTheme } from 'context';

const CommonAccountLayout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.wrapper} ${theme === THEME.LIGHT ? styles.light : styles.dark}`}>
      <Header />
      <main className={styles.main}>
        <section className={styles.cards}>
          <UserCardsList />
        </section>
        <div className={styles.accountInner}>
          <aside className={styles.accountManagement}>
            <Wallet />
            <AccountNavBar />
          </aside>
          <section className={styles.accountForm}>{children}</section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommonAccountLayout;
