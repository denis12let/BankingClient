import React, { useEffect } from 'react';
import styles from './Transaction.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneTransactionByIdThunk } from 'store/actions';
import { SERVICE_TRANSACTION_TITLE } from 'constants/services';
import NavLinkItem from 'ui/Link/Link';
import CustomButton from 'ui/CustomButton/CustomButton';
import { formatDate } from 'utils/convertUtils';
import Loader from 'ui/Loader/Loader';

const Transaction = () => {
  const dispatch = useDispatch();
  const { transaction, isLoading, error } = useSelector((state) => state.transaction);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchOneTransactionByIdThunk(id));
  }, []);

  return (
    <>
      {isLoading || !transaction ? (
        <Loader />
      ) : (
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Транзакция #{transaction.id}</h2>
          <div className={styles.inner}>
            <div className={styles.subtitle}>
              <span>Статус:</span> <span>{transaction.status}</span>
            </div>
            <div className={styles.subtitle}>
              <span>Сумма перевода:</span>{' '}
              <span>
                {transaction.amount} {transaction.currency}
              </span>
            </div>
            <div className={styles.subtitle}>
              <span>Тип:</span> <span>{transaction.type}</span>
            </div>
            <div className={styles.subtitle}>
              <span>Отправитель:</span> <span>{transaction.source}</span>
            </div>
            <div className={styles.subtitle}>
              <span>Получатель:</span> <span>{transaction.destination}</span>
            </div>
            {transaction.cardFrom && (
              <div className={styles.subtitle}>
                <span>Карта получателя:</span> <span>{transaction.cardFrom}</span>
              </div>
            )}
            {transaction.cardTo && (
              <div className={styles.subtitle}>
                <span>Карта отправителя:</span> <span>{transaction.cardTo}</span>
              </div>
            )}
            <div className={styles.subtitle}>
              <span>Дата:</span> <span>{formatDate(transaction.date)}</span>
            </div>
            {transaction.description && (
              <div className={styles.subtitle}>
                <span>Комментарий:</span> <span>{transaction.description}</span>
              </div>
            )}
          </div>
          <div className={styles.backBtn}>
            <CustomButton onClick={(e) => navigate(-1)}>Вернуться</CustomButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Transaction;
