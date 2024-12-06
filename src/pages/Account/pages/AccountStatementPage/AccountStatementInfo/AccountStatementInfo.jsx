import React from 'react';
import styles from './AccountStatementInfo.module.css';
import { SERVICE_TYPE } from 'constants/services';
import { formatDate } from 'utils/convertUtils';

const AccountStatementInfo = ({ user, balance, transactions, cards, basketServices }) => {
  const totalAccountSum = cards.reduce((sum, item) => (sum += +item.balance), +balance);

  const depositsCount = basketServices.filter((item) => item.type === SERVICE_TYPE.DEPOSIT).length;
  const loansCount = basketServices.filter((item) => item.type === SERVICE_TYPE.LOAN).length;

  const depositsTotalSum = basketServices.reduce((sum, item) => (item.type === SERVICE_TYPE.DEPOSIT ? (sum += +item.amount) : sum), 0);
  const loansTotalSum = basketServices.reduce((sum, item) => (item.type === SERVICE_TYPE.LOAN ? (sum += +item.amount) : sum), 0);

  const transactionsCount = transactions.length;

  const userCreatedAt = user.createdAt;

  return (
    <div className={styles.account}>
      <div className={styles.subtitle}>
        <span>Баланкс кошелька:</span> <span>{balance} BYN</span>
      </div>
      <div className={styles.subtitle}>
        <span>Общий баланс аккаунта:</span> <span>{totalAccountSum} BYN</span>
      </div>
      <div className={styles.subtitle}>
        <span>Количество кредитов:</span> <span>{loansCount}</span>
      </div>
      <div className={styles.subtitle}>
        <span>Сумма кредитов:</span> <span>{loansTotalSum} BYN</span>
      </div>
      <div className={styles.subtitle}>
        <span>Количество вкладов:</span> <span>{depositsCount}</span>
      </div>
      <div className={styles.subtitle}>
        <span>Сумма вкладов:</span> <span>{depositsTotalSum} BYN</span>
      </div>
      <div className={styles.subtitle}>
        <span>Количество операций:</span> <span>{transactionsCount}</span>
      </div>
      <div className={styles.subtitle}>
        <span>Дата регистрации аккаунта:</span> <span>{formatDate(userCreatedAt)}</span>
      </div>
    </div>
  );
};

export default AccountStatementInfo;
