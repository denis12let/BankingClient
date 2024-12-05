import React, { useEffect } from 'react';
import styles from './Auth.module.css';
import Registration from 'pages/AuthPage/AuthTab/Registration/Registration';
import Login from 'pages/AuthPage/AuthTab/Login/Login';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { APP_ROUTES_PATH } from 'constants/app';

const Auth = () => {
  const location = useLocation();
  const currentPathName = location.pathname;
  const { isAuth } = useSelector((state) => state.user);
  const { isProfile } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  console.log(isAuth, isProfile);
  useEffect(() => {
    if (isAuth && isProfile) {
      navigate(APP_ROUTES_PATH.ACCOUNT);
      return;
    }

    if (isAuth) {
      navigate(APP_ROUTES_PATH.PROFILE);
      return;
    }
  }, []);

  return <>{currentPathName === '/login' ? <Login /> : <Registration />}</>;
};

export default Auth;
