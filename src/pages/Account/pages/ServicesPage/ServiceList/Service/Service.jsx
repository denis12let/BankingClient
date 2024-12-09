import React from 'react';
import styles from './Service.module.css';
import { formatDate } from 'utils/convertUtils';
import successful from 'assets/icons/transaction/successful.svg';
import CustomButton from 'ui/CustomButton/CustomButton';
import { SERVICE_TYPE, SERVICE_TYPE_RUS } from 'constants/services';
import Card from 'components/Card/Card';
import { useSelector } from 'react-redux';

const Service = ({ serviceData, isLoading, deleteService, ...props }) => {
  const { balance } = useSelector((state) => state.account);

  return (
    <Card>
      <div className={styles.service}>
        <div className={`${styles.source} ${styles.column}`}>
          <div className={styles.top}>
            <img src={successful} alt="" className={styles.icon} />
            <div className={styles.source}>Re:fine/ MINSK</div>
          </div>
          <div className={styles.type}>
            <span>Тип: </span>
            {SERVICE_TYPE_RUS[serviceData.type]}
          </div>
        </div>
        <div className={`${styles.date} ${styles.column}`}>
          <div className={styles['date-time']}>
            <span>Оформление:</span> {formatDate(serviceData.serviceDate).slice(0, 10)}
          </div>
          <div className={styles['date-time']}>
            <span>Завершение:</span> {formatDate(serviceData.maturityDate).slice(0, 10)}
          </div>
        </div>
        <div className={`${styles.info} ${styles.column}`}>
          <div className={styles.amount}>
            <span>Конечная сумма:</span> {serviceData.amount} BYN
          </div>
          <div className={styles.interest}>
            <span>Процент:</span> {serviceData.interest}%
          </div>
        </div>
        <div className={styles.payment}>
          <CustomButton
            onClick={() => deleteService(serviceData)}
            disabled={(serviceData.type === SERVICE_TYPE.LOAN && +balance < +serviceData.amount) || isLoading}
          >
            {serviceData.type === SERVICE_TYPE.DEPOSIT ? 'Забрать' : 'Оплатить'}
          </CustomButton>
        </div>
      </div>
    </Card>
  );
};

export default Service;
