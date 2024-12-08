import React, { useState } from 'react';
import styles from './SettingsEditField.module.css';
import Input from 'ui/Input/Input';
import DefaultButton from 'ui/DefaultButton/DefaultButton';
import edit from 'assets/icons/common/edit.svg';
import TextArea from 'ui/TextArea/TextArea';

const SettingsEditField = ({ fieldName, text, setText, type }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const editType = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className={styles.subtitle}>
      <span>{fieldName}:</span>
      <div className={styles.inputField}>
        {editType === 'input' ? (
          <Input text={text} setText={setText} disabled={isDisabled} />
        ) : (
          <TextArea text={text} setText={setText} disabled={isDisabled} />
        )}
        <div className={styles.editBtn}>
          <DefaultButton onClick={(e) => setIsDisabled(!isDisabled)}>
            <img src={edit} alt="" />
          </DefaultButton>
        </div>
      </div>
    </div>
  );
};

export default SettingsEditField;
