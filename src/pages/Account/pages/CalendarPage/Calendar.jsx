import React, { useEffect, useState } from 'react';
import CustomCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Calendar.module.css';
import './styles/calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCalendarThunk } from 'store/actions';
import TooltipTrigger from 'components/TooltipTrigger/TooltipTrigger';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const { transactions, isLoading } = useSelector((state) => state.transaction);

  const getTileClass = (date) => {
    date.setDate(date.getDate() + 1);

    const localDate = date.toISOString().split('T')[0];
    const transaction = transactions.find((t) => t.date === localDate);
    if (!transaction) return null;

    const totalTransactions = transaction.paymentCount + transaction.depositCount;

    if (totalTransactions === 0) return 'tile-neutral';
    if (totalTransactions <= 5) return 'tile-green-light';
    if (totalTransactions <= 10) return 'tile-green-medium';
    if (totalTransactions <= 20) return 'tile-green-dark';
    return 'tile-green-very-dark';
  };

  useEffect(() => {
    const selectedMonth = date.getMonth() + 1;
    const selectedYear = date.getFullYear();

    dispatch(fetchCalendarThunk({ month: selectedMonth, year: selectedYear }));
  }, [dispatch, date, setDate]);

  const handleActiveDateChange = ({ activeStartDate }) => {
    const firstDayOfMonth = new Date(activeStartDate.getFullYear(), activeStartDate.getMonth(), 1);
    setDate(firstDayOfMonth);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Календарь</h2>
      <div className={styles.inner}>
        <CustomCalendar
          onChange={setDate}
          value={date}
          onActiveStartDateChange={handleActiveDateChange}
          tileContent={({ date }) => {
            const transaction = transactions.find((t) => t.date === date.toISOString().split('T')[0]);
            if (!transaction) return null;

            return (
              <div className={styles.tooltipContainer}>
                <TooltipTrigger
                  text=""
                  info={[
                    <p key="1" className={styles.paymentCount}>
                      Платежи: {transaction.paymentCount}
                    </p>,
                    <p key="2" className={styles.paymentTotal}>
                      Сумма платежей: {transaction.paymentTotal} 🠗
                    </p>,
                    <p key="3" className={styles.depositCount}>
                      Депозиты: {transaction.depositCount}{' '}
                    </p>,
                    <p key="4" className={styles.depositTotal}>
                      Сумма депозитов: {transaction.depositTotal} 🠕
                    </p>,
                    <p key="5" className={styles.totalCount}>
                      Всего операций: {transaction.depositCount + transaction.paymentCount}
                    </p>,
                  ]}
                />
              </div>
            );
          }}
          tileClassName={({ date }) => getTileClass(date)}
        />
      </div>
    </div>
  );
};

export default Calendar;
