import React, { useState } from 'react';
import styles from './BankService.module.css';
import Card from 'components/Card/Card';
import CustomButton from 'ui/CustomButton/CustomButton';
import { SERVICE_TYPE, SERVICE_TYPE_RUS } from 'constants/services';
import Input from 'ui/Input/Input';

const BankService = ({ serviceData, balance, addServiceHandler, isLoadingServices, isLoadingBasket, amount, setAmount, isAuth }) => {
  const isProfile = localStorage.getItem('isProfile');
  const [isPaymentFieldOpen, setIsPaymentFieldOpen] = useState(false);

  return (
    <Card styles={{ width: '100%' }}>
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

          <div className={styles.payment}>
            {isPaymentFieldOpen && (
              <div className={styles.paymentField}>
                <Input placeholder="Сумма" setText={setAmount} text={amount} style={{ height: '50px' }} maxLength="5" />
                <CustomButton
                  onClick={() => addServiceHandler(serviceData)}
                  disabled={
                    !isAuth ||
                    +amount < +serviceData.minSum ||
                    (serviceData.type === SERVICE_TYPE.DEPOSIT && +amount > +balance) ||
                    isLoadingBasket
                  }
                >
                  Взять
                </CustomButton>
              </div>
            )}
            <CustomButton
              onClick={() => setIsPaymentFieldOpen(!isPaymentFieldOpen)}
              disabled={!isProfile || (serviceData.type === SERVICE_TYPE.DEPOSIT && +balance < +serviceData.minSum) ? true : false}
            >
              Открыть
            </CustomButton>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BankService;
