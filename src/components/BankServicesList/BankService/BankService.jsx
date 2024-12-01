import React from 'react';
import styles from './BankService.module.css';
import Card from 'components/Card/Card';
import CustomButton from 'ui/CustomButton/CustomButton';
import { SERVICE_TYPE_RUS } from 'constants/services';

const BankService = ({ name, minSum, interest, duration, type }) => {
  return (
    <Card styles={{ width: '100%' }}>
      <div className={styles.service}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.inner}>
          <div className={styles.detail}>
            <span className={styles.label}>Тип:</span>
            <span className={`${styles.value} ${styles.type}`}>{SERVICE_TYPE_RUS[type]}</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.label}>Минимальная сумма:</span>
            <span className={styles.value}>{minSum} BYN</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.label}>Процентная ставка:</span>
            <span className={styles.value}>{interest}%</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.label}>Срок:</span>
            <span className={styles.value}>{duration} дней</span>
          </div>
          <CustomButton>Оформить</CustomButton>
        </div>
      </div>
    </Card>
  );
};

export default BankService;
