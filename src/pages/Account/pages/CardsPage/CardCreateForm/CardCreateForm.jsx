import React from 'react';
import styles from './CardCreateForm.module.css';
import Select from 'ui/Select/Select';
import Input from 'ui/Input/Input';
import CustomButton from 'ui/CustomButton/CustomButton';
import Error from 'ui/Error/Error';

const CardCreateForm = ({
  number,
  setNumber,
  expiryMonth,
  setExpiryMonth,
  expiryYear,
  setExpiryYear,
  cvc,
  setCvc,
  name,
  setName,
  holderName,
  setHolderName,
  focus,
  setFocus,
  submitHandler,
  error,
  isLoading,
}) => {
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 8 }, (_, i) => (currentYear + i + 1).toString().slice(-2));
  };

  const generateMonths = () => {
    return Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  };

  return (
    <form className={styles.form}>
      <div className={`${styles.form__row_1} ${styles.form__group}`}>
        <div className={styles.name}>
          <small>Имя карты</small>
          <Input
            type="text"
            name="cardName"
            placeholder="Моя карта"
            required
            maxLength="16"
            setText={setName}
            text={name}
            onClick={(e) => setFocus(e.target.name)}
          />
        </div>
        <div className={styles.holderName}>
          <small>Имя держателя</small>
          <Input
            type="text"
            name="name"
            placeholder="Ivan Ivanov"
            required
            pattern="^[A-Za-z\s]*$"
            patternOnChange="^[A-Za-z\s]*$"
            maxLength="25"
            setText={setHolderName}
            text={holderName}
            onClick={(e) => setFocus(e.target.name)}
          />
        </div>
      </div>
      <div className={`${styles.form__row_2} ${styles.form__group}`}>
        <div className={styles.number}>
          <small>Номер</small>
          <Input
            type="tel"
            name="number"
            placeholder="1234 1234 1234 1234"
            required
            pattern="\d{16}"
            patternOnChange="\d"
            maxLength="19"
            text={number}
            setText={setNumber}
            onClick={(e) => setFocus(e.target.name)}
            isCardNumber={true}
          />
        </div>
      </div>
      <div className={`${styles.form__row_3} ${styles.form__group}`}>
        <div className={styles.monthSelect}>
          <small>Месяц</small>
          <Select
            name="expiry"
            value={expiryMonth}
            onChange={(e) => setExpiryMonth(e.target.value)}
            options={generateMonths()}
            placeholder="Месяц"
            required
            onClick={(e) => setFocus('expiry')}
          />
        </div>
        <div className={styles.yearSelect}>
          <small>Год</small>
          <Select
            name="expiry"
            value={expiryYear}
            onChange={(e) => setExpiryYear(e.target.value)}
            options={generateYears()}
            placeholder="Год"
            required
            onClick={(e) => setFocus('expiry')}
          />
        </div>
        <div className={styles.cvc}>
          <small>CVC</small>
          <Input
            type="tel"
            name="cvc"
            placeholder="123"
            required
            pattern="\d{3}"
            patternOnChange="\d"
            maxLength="3"
            text={cvc}
            setText={setCvc}
            onClick={(e) => setFocus(e.target.name)}
          />
        </div>
      </div>
      {error ? <Error>{error}</Error> : ''}
      <div className={styles.submitButton}>
        <CustomButton onClick={(e) => submitHandler(e)} disabled={isLoading}>
          Добавить
        </CustomButton>
      </div>
    </form>
  );
};

export default CardCreateForm;
