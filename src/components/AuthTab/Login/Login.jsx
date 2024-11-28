import React, { useState } from 'react';
import styles from './../styles/authTab.module.css';
import Card from 'components/Card/Card';
import Input from 'ui/Input/Input';
import NavLinkItem from 'ui/Link/Link';
import { APP_ROUTES_PATH } from 'constants/app';
import arrowLeft from './../../../assets/icons/common/arrow-left.svg';
import CustomButton from 'ui/CustomButton/CustomButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const blockStyle = {
    maxWidth: '400px',
    width: '100%',
  };

  return (
    <div className={styles.wrapper}>
      <Card styles={blockStyle}>
        <h3 className={styles.title}>Вход</h3>
        <form className={styles.form}>
          <div className={`${styles.email} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Email</span>
            <Input placeholder="name@example.com" required={true} text={email} setText={setEmail} />
          </div>
          <div className={`${styles.password} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Пароль</span>
            <Input type={'password'} required={true} text={password} setText={setPassword} />
          </div>
        </form>
        <div className={styles.regCheck}>
          <p>Нет аккаунта?</p>
          <p className={styles.link}>
            <NavLinkItem to={APP_ROUTES_PATH.REGISTRATION}>Зарегистрируйтесь сейчас</NavLinkItem>
          </p>
        </div>
        <div className={styles.regBtn}>
          <CustomButton>Войти</CustomButton>
        </div>
      </Card>
      <div className={styles.returnBtn}>
        <NavLinkItem to={APP_ROUTES_PATH.MAIN}>
          <div className={styles.returnBtnInner}>
            <img src={arrowLeft} className={styles.btnIcon} alt="" />
            <span className={styles.btnText}>Вернуться на главную</span>
          </div>
        </NavLinkItem>
      </div>
    </div>
  );
};

export default Login;