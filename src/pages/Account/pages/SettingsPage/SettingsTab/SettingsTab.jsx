import React, { useState } from 'react';
import styles from './SettingsTab.module.css';
import SettingsEditField from '../../../../../components/SettingsEditField/SettingsEditField';
import CustomButton from 'ui/CustomButton/CustomButton';
import Error from 'ui/Error/Error';

const SettingsTab = ({ profile, saveHandler, error, isLoading }) => {
  const [userName, setUserName] = useState(profile.userName);
  const [userSurname, setUserSurname] = useState(profile.userSurname);
  const [profileImg, setProfileImg] = useState(profile.profileImg);
  const [password, setPassword] = useState();

  const resetHandler = () => {
    setUserName('');
    setUserSurname('');
    setProfileImg('');
    setPassword('');
  };

  return (
    <div className={styles.settings}>
      <SettingsEditField fieldName="Имя" text={userName} setText={setUserName} />
      <SettingsEditField fieldName="Фамилия" text={userSurname} setText={setUserSurname} />
      <SettingsEditField fieldName="Фото профиля" text={profileImg} setText={setProfileImg} />
      <SettingsEditField fieldName="Пароль пользователя" text={password} setText={setPassword} />
      {error && <Error>{error}</Error>}
      <div className={styles.manageBtns}>
        <CustomButton onClick={() => saveHandler(userName, userSurname, profileImg, password)} disabled={isLoading}>
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

export default SettingsTab;
