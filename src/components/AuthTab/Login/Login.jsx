import React, { useEffect, useState } from 'react';
import styles from './../styles/authTab.module.css';
import Card from 'components/Card/Card';
import Input from 'ui/Input/Input';
import NavLinkItem from 'ui/Link/Link';
import { APP_ROUTES_PATH } from 'constants/app';
import arrowLeft from './../../../assets/icons/common/arrow-left.svg';
import CustomButton from 'ui/CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import Error from 'ui/Error/Error';
import { loginThunk } from 'store/actions/userActions';
import { validateAuth } from 'utils/authValidation';
import { setError } from 'store/reducers/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      setErrors([<Error key="error">{error}</Error>]);
    }
    return () => {
      dispatch(setError(null));
    };
  }, [error]);

  const loginHandler = () => {
    const candidate = { email, password };
    const errorsArray = validateAuth(candidate, error);
    if (errorsArray) {
      setErrors(Object.keys(errorsArray).map((key) => <Error key={key}>{errorsArray[key]}</Error>));
      return;
    } else {
      setErrors(null);
    }
    dispatch(loginThunk(candidate));

    if (!errors) {
      navigate(APP_ROUTES_PATH.ACCOUNT);
    }
  };

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
        {errors ? <div className={styles.errors}>{errors}</div> : <></>}
        <div className={styles.regCheck}>
          <p>Нет аккаунта?</p>
          <p className={styles.link}>
            <NavLinkItem to={APP_ROUTES_PATH.REGISTRATION}>Зарегистрируйтесь сейчас</NavLinkItem>
          </p>
        </div>
        <div className={styles.regBtn}>
          <CustomButton disabled={isLoading === true ? true : false} onClick={() => loginHandler()}>
            Войти
          </CustomButton>
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
