import React, { useState } from 'react';
import styles from './AdminServicesForm.module.css';
import Input from 'ui/Input/Input';
import Error from 'ui/Error/Error';
import Select from 'ui/Select/Select';
import { SERVICE_TYPE_RUS } from 'constants/services';
import CustomButton from 'ui/CustomButton/CustomButton';

const AdminServicesForm = ({ errors, isLoading, addServiceHandler }) => {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState(null);
  const [duration, setDuration] = useState(null);
  const [minSum, setMinSum] = useState(null);
  const [type, setType] = useState('');

  const typesArray = [SERVICE_TYPE_RUS.DEPOSIT, SERVICE_TYPE_RUS.LOAN];

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.row1}>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Название</span>
            <Input placeholder="Название услуги" required={true} text={name} setText={setName} autoFocus />
          </div>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Процент</span>
            <Input text={interest} setText={setInterest} placeholder="1.5" />
          </div>
        </div>
        <div className={styles.row2}>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Длительность (в днях)</span>
            <Input placeholder="10" text={duration} setText={setDuration} />
          </div>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Минимальная сумма</span>
            <Input placeholder="250" text={minSum} setText={setMinSum} />
          </div>
        </div>
        <div className={styles.row3}>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Тип</span>
            <Select name="type" value={type} onChange={(e) => setType(e.target.value)} options={typesArray} />
          </div>
        </div>
      </form>
      {errors ? <Error>{errors}</Error> : <></>}
      <div className={styles.regBtn}>
        <CustomButton disabled={isLoading} onClick={() => addServiceHandler(name, interest, duration, minSum, type)}>
          Добавить
        </CustomButton>
      </div>
    </div>
  );
};

export default AdminServicesForm;
