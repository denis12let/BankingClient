import React from 'react';
import styles from './Transaction.module.css';
import successful from 'assets/icons/transaction/successful.svg';
import download from 'assets/icons/transaction/download.svg';
import del from 'assets/icons/transaction/delete.svg';
import open from 'assets/icons/transaction/open.svg';
import NavLinkItem from 'ui/Link/Link';
import { formatDate } from 'utils/convertUtils';
import { SERVICE_TRANSACTION, SERVICE_TRANSACTION_TITLE } from 'constants/services';
import { APP_ROUTES_PATH } from 'constants/app';

const Transaction = ({ id, amount, currency, date, status, type, deleteTransaction }) => {
  const getTypeSymbol = (type) => {
    if (type === SERVICE_TRANSACTION.DEPOSIT) return '+';
    else if (type === SERVICE_TRANSACTION.PAYMENT) return '-';
    else if (type === SERVICE_TRANSACTION.TRANSFER) return '~';
    return '?';
  };

  return (
    <div className={styles.transaction}>
      <div>
        <NavLinkItem>
          <div className={styles.left}>
            <div className={styles.top}>
              <img src={successful} alt="" className={styles.icon} />
              <div className={styles['date-time']}>{formatDate(date)}</div>
              <div className={styles.source}>FONBET/ MINSK/ BY</div>
            </div>
            <div className={styles.description}>{SERVICE_TRANSACTION_TITLE[type]}</div>
          </div>
        </NavLinkItem>
      </div>
      <div className={styles.right}>
        <div className={styles.icons}>
          {/* <img src={download} alt="" className={`${styles.icon} ${styles.btnIcon}`} /> */}
          <NavLinkItem to={APP_ROUTES_PATH.ACCOUNT + APP_ROUTES_PATH.TRANSACTION + id}>
            <img src={open} alt="" className={`${styles.icon} ${styles.btnIcon}`} />
          </NavLinkItem>

          <img src={del} alt="" onClick={() => deleteTransaction(id)} className={`${styles.icon} ${styles.btnIcon}`} />
        </div>
        <div className={`${styles.amount} ${styles[type.toLowerCase()]}`}>
          {getTypeSymbol(type)}
          {amount} {currency}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
