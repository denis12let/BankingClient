import React, { useState } from 'react';
import styles from './AdminBankTab.module.css';
import CustomButton from 'ui/CustomButton/CustomButton';
import Error from 'ui/Error/Error';
import SettingsEditField from 'components/SettingsEditField/SettingsEditField';

const AdminBankTab = ({ bank, saveHandler, error, isLoading }) => {
  const [name, setName] = useState(bank.name);
  const [telephoneNumber, setTelephoneNumber] = useState(bank.telephoneNumber);
  const [img, setImg] = useState(bank.img);
  const [description, setDescription] = useState(bank.description);

  const resetHandler = () => {
    setName('');
    setTelephoneNumber('');
    setImg('');
    setDescription('');
  };

  return (
    <div className={styles.settings}>
      <SettingsEditField fieldName="Название" text={name} setText={setName} />
      <SettingsEditField fieldName="Номер телефона" text={telephoneNumber} setText={setTelephoneNumber} />
      <SettingsEditField fieldName="Фото" text={img} setText={setImg} />
      <SettingsEditField fieldName="Описание" text={description} setText={setDescription} type={'textarea'} />
      {error && <Error>{error}</Error>}
      <div className={styles.manageBtns}>
        <CustomButton onClick={() => saveHandler(name, telephoneNumber, img, description)} disabled={isLoading}>
          Сохранить
        </CustomButton>
        <CustomButton
          style={{ backgroundColor: 'transparent', border: '2px solid  #f73b3b', color: '#f73b3b' }}
          onClick={() => resetHandler()}
        >
          Сбросить
        </CustomButton>
      </div>
    </div>
  );
};

export default AdminBankTab;
