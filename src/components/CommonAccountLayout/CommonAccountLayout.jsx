import React from 'react';
import styles from './CommonAccountLayout.module.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import UserCardsList from './UserCardsList/UserCardsList';
import AccountNavBar from './AccountNavBar/AccountNavBar';

const CommonAccountLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <section className={styles.cards}>
          <UserCardsList />
        </section>
        <div className={styles.accountInner}>
          <aside className={styles.accountManagement}>
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
