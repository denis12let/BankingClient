import React, { useState } from 'react';
import styles from './SettingsEditField.module.css';
import Input from 'ui/Input/Input';
import DefaultButton from 'ui/DefaultButton/DefaultButton';
import edit from 'assets/icons/common/edit.svg';

const SettingsEditField = ({ fieldName, text, setText }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <div className={styles.subtitle}>
      <span>{fieldName}:</span>
      <div className={styles.inputField}>
        <Input text={text} setText={setText} disabled={isDisabled}></Input>
        <DefaultButton onClick={(e) => setIsDisabled(!isDisabled)}>
          <img src={edit} alt="" />
        </DefaultButton>
      </div>
    </div>
  );
};

export default SettingsEditField;
