import React from 'react';
import styles from './AdminService.module.css';
import Card from 'components/Card/Card';
import { SERVICE_TYPE_RUS } from 'constants/services';

const AdminService = (serviceData) => {
  return (
    <Card styles={{ width: '90%' }}>
      <div className={styles.service}>
        <h3 className={styles.title}>{serviceData.name}</h3>
        <div className={styles.inner}>
          <div className={styles.detail}>
            <span className={styles.label}>Тип:</span>
            <span className={`${styles.value} ${styles.type}`}>{SERVICE_TYPE_RUS[serviceData.type]}</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.label}>Минимальная сумма:</span>
            <span className={styles.value}>{serviceData.minSum} BYN</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.label}>Процентная ставка:</span>
            <span className={styles.value}>{serviceData.interest}%</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.label}>Срок:</span>
            <span className={styles.value}>{serviceData.duration} дней</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AdminService;
