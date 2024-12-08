import React, { useEffect, useState } from 'react';
import styles from './Profile.module.css';
import Card from 'components/Card/Card';
import Input from 'ui/Input/Input';
import CustomButton from 'ui/CustomButton/CustomButton';
import NavLinkItem from 'ui/Link/Link';
import arrowLeft from 'assets/icons/common/arrow-left.svg';
import { APP_ROUTES_PATH } from 'constants/app';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { validateProfile } from 'utils/authValidation';
import { createProfileThunk, fetchCurrentProfileThunk } from 'store/actions';
import Error from 'ui/Error/Error';
import { resetProfile, setProfileFlag } from 'store/reducers/userReducers/profileSlice';
import { resetUser } from 'store/reducers/userReducers/userSlice';
import DefaultButton from 'ui/DefaultButton/DefaultButton';
import Loader from 'ui/Loader/Loader';

const Profile = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [passportIdentifier, setPassportIdentifier] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const { user, isAuth } = useSelector((state) => state.user);
  const { profile, isProfile, isLoading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    const localIsProfile = localStorage.getItem('isProfile');
    const localIsAuth = localStorage.getItem('isAuth');
    if (localIsAuth === 'false') {
      navigate(APP_ROUTES_PATH.REGISTRATION);
    }
    if (localIsProfile === 'true') {
      navigate(APP_ROUTES_PATH.ACCOUNT);
    }
    console.log(124);
    dispatch(fetchCurrentProfileThunk());
    // if (!isAuth) {
    //   navigate(APP_ROUTES_PATH.REGISTRATION);
    // }
    // if (isProfile) {
    //   navigate(APP_ROUTES_PATH.ACCOUNT);
    // }
  }, []);

  if (profile) {
    localStorage.setItem('isProfile', true);
    navigate(APP_ROUTES_PATH.ACCOUNT);
  }

  const blockStyle = {
    maxWidth: '400px',
    width: '100%',
  };

  const createProfileHandler = async () => {
    const candidate = { userName, userSurname, telephoneNumber, passportIdentifier };
    const errorsArray = setErrors(validateProfile(candidate));

    if (errorsArray) {
      setErrors(Object.keys(errorsArray).map((key) => <Error key={key}>{errorsArray[key]}</Error>));

      return;
    } else {
      setErrors(null);
    }

    candidate.profileImg = profileImg;

    try {
      await dispatch(createProfileThunk(candidate)).unwrap();
      dispatch(setProfileFlag(true));
      navigate(APP_ROUTES_PATH.ACCOUNT);
    } catch (error) {
      setErrors([<Error key="error">{error}</Error>]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Card styles={blockStyle}>
        <h3 className={styles.title}>Создайте профиль</h3>
        <form className={styles.form}>
          <div className={`${styles.name} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Имя</span>
            <Input placeholder="Иван" required={true} text={userName} setText={setUserName} autoFocus maxLength="24" />
          </div>
          <div className={`${styles.surname} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Фамилия</span>
            <Input placeholder="Иванов" text={userSurname} setText={setUserSurname} autoFocus maxLength="24" />
          </div>
          <div className={`${styles.telephone} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Телефон</span>
            <Input placeholder="(00) 000-00-00" isTelephone required={true} text={telephoneNumber} setText={setTelephoneNumber} />
          </div>
          <div className={`${styles.identifier} ${styles.field}`}>
            <span className={`${styles.subtitle} ${styles.required}`}>Идентификационный номер</span>
            <Input required={true} text={passportIdentifier} setText={setPassportIdentifier} maxLength="24" />
          </div>
          <div className={`${styles.avatar} ${styles.field}`}>
            <span className={`${styles.subtitle}`}>Ссылка на аватар</span>
            <Input required={true} text={profileImg} setText={setProfileImg} />
          </div>
        </form>
        {errors ? <div className={styles.errors}>{errors}</div> : <></>}
        <div className={styles.regBtn}>
          <CustomButton disabled={isLoading === true ? true : false} onClick={() => createProfileHandler()}>
            Сохранить
          </CustomButton>
        </div>
      </Card>
      <div className={styles.returnBtn}>
        <NavLinkItem to={APP_ROUTES_PATH.ROOT}>
          <div className={styles.returnBtnInner}>
            <img src={arrowLeft} className={styles.btnIcon} alt="" />
            <span className={styles.btnText}>Вернуться на главную</span>
          </div>
        </NavLinkItem>
      </div>
      <div className={styles.leaveBtn}></div>
    </div>
  );
};

export default Profile;
