import React, { useState } from 'react';
import styles from './AdminNewsForm.module.css';
import Input from 'ui/Input/Input';
import TextArea from 'ui/TextArea/TextArea';
import CustomButton from 'ui/CustomButton/CustomButton';
import Error from 'ui/Error/Error';

const AdminNewsForm = ({ errors, isLoading, addNewsHandler }) => {
  const [title, setTitle] = useState('');
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [textColor, setTextColor] = useState(null);
  const [img, setImg] = useState(null);
  const [description, setDescription] = useState('');

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.row1}>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Название</span>
            <Input placeholder="Новость" required={true} text={title} setText={setTitle} autoFocus />
          </div>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle} `}>Фото</span>
            <Input text={img} setText={setImg} />
          </div>
        </div>
        <div className={styles.row2}>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle}`}>Фоновый цвет</span>
            <Input placeholder="black (#000)" text={backgroundColor} setText={setBackgroundColor} />
          </div>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle} `}>Цвет текста</span>
            <Input placeholder="white (#fff)" text={textColor} setText={setTextColor} />
          </div>
        </div>
        <div className={styles.row3}>
          <div className={`${styles.title} ${styles.field}`}>
            <span className={`${styles.subtitle}`}>Описание</span>
            <TextArea placeholder="Описание новости" text={description} setText={setDescription} />
          </div>
        </div>
      </form>
      {errors ? <Error>{errors}</Error> : <></>}
      <div className={styles.regBtn}>
        <CustomButton disabled={isLoading} onClick={() => addNewsHandler(title, backgroundColor, textColor, img, description)}>
          Добавить
        </CustomButton>
      </div>
    </div>
  );
};

export default AdminNewsForm;
