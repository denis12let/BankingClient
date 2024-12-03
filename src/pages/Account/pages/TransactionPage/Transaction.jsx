import React, { useEffect } from 'react';
import styles from './Transaction.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneTransactionByIdThunk } from 'store/actions';
import { SERVICE_TRANSACTION_TITLE } from 'constants/services';
import NavLinkItem from 'ui/Link/Link';
import CustomButton from 'ui/CustomButton/CustomButton';
import { formatDate } from 'utils/convertUtils';

const Transaction = () => {
  const dispatch = useDispatch();
  const { transaction, isLoading, error } = useSelector((state) => state.transaction);
  const { id } = useParams();
  const navigate = useNavigate();

  const { amount, cardFrom, cardTo, currency, date, description, destination, id: transactionId, source, status, type } = transaction;

  useEffect(() => {
    dispatch(fetchOneTransactionByIdThunk(id));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Транзакция #{transactionId}</h2>
      <div className={styles.inner}>
        <div className={styles.subtitle}>
          <span>Статус:</span> <span>{status}</span>
        </div>
        <div className={styles.subtitle}>
          <span>Сумма перевода:</span>{' '}
          <span>
            {amount} {currency}
          </span>
        </div>
        <div className={styles.subtitle}>
          <span>Тип:</span> <span>{type}</span>
        </div>
        <div className={styles.subtitle}>
          <span>Отправитель:</span> <span>{source}</span>
        </div>
        <div className={styles.subtitle}>
          <span>Получатель:</span> <span>{destination}</span>
        </div>
        {cardFrom && (
          <div className={styles.subtitle}>
            <span>Карта получателя:</span> <span>{cardFrom}</span>
          </div>
        )}
        {cardTo && (
          <div className={styles.subtitle}>
            <span>Карта отправителя:</span> <span>{cardTo}</span>
          </div>
        )}
        <div className={styles.subtitle}>
          <span>Дата:</span> <span>{formatDate(date)}</span>
        </div>
        {description && (
          <div className={styles.subtitle}>
            <span>Комментарий:</span> <span>{description}</span>
          </div>
        )}
      </div>
      <div className={styles.backBtn}>
        <CustomButton onClick={(e) => navigate(-1)}>Вернуться</CustomButton>
      </div>
    </div>
  );
};

export default Transaction;
