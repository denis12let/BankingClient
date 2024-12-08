import React from 'react';
import styles from './CommonAdminLayout.module.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import AdminNavBar from './AdminNavBar/AdminNavBar';

const CommonAdminLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.adminInner}>
          <aside className={styles.adminManagement}>
            <AdminNavBar />
          </aside>
          <section className={styles.adminForm}>{children}</section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommonAdminLayout;
