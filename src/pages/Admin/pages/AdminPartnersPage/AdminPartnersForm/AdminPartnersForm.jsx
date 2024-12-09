import React, { useState } from 'react';
import styles from './AdminPartnersForm.module.css';
import Input from 'ui/Input/Input';
import TextArea from 'ui/TextArea/TextArea';
import CustomButton from 'ui/CustomButton/CustomButton';
import Error from 'ui/Error/Error';

const AdminPartnersForm = ({ errors, isLoading, addPartnerHandler }) => {
  const [title, setTitle] = useState('');
  const [titleDescription, setTitleDescription] = useState(null);
  const [telephoneNumber, setTelephoneNumber] = useState(null);
  const [img, setImg] = useState(null);
  const [description, setDescription] = useState('');

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.row1}>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Название</span>
            <Input maxLength="14" placeholder="Реклама" required={true} text={title} setText={setTitle} autoFocus />
          </div>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle} `}>Краткое описание</span>
            <Input placeholder="Описание" text={titleDescription} setText={setTitleDescription} />
          </div>
        </div>
        <div className={styles.row2}>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Номер телефона</span>
            <Input placeholder="+375 (00) 000-00-00" text={telephoneNumber} setText={setTelephoneNumber} isTelephone={true} />
          </div>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle} `}>Фото</span>
            <Input text={img} setText={setImg} />
          </div>
        </div>
        <div className={styles.row3}>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle}`}>Описание</span>
            <TextArea placeholder="Описание рекламы" text={description} setText={setDescription} />
          </div>
        </div>
      </form>
      {errors ? <Error>{errors}</Error> : <></>}
      <div className={styles.regBtn}>
        <CustomButton disabled={isLoading} onClick={() => addPartnerHandler(title, titleDescription, telephoneNumber, img, description)}>
          Добавить
        </CustomButton>
      </div>
    </div>
  );
};

export default AdminPartnersForm;
