import React, { useEffect } from 'react';
import styles from './Auth.module.css';
import Registration from 'pages/AuthPage/AuthTab/Registration/Registration';
import Login from 'pages/AuthPage/AuthTab/Login/Login';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { APP_ROUTES_PATH } from 'constants/app';
import { setError } from 'store/reducers/userReducers/userSlice';

const Auth = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPathName = location.pathname;
  const { isAuth } = useSelector((state) => state.user);
  const { isProfile } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  useEffect(() => {
    const localIsProfile = localStorage.getItem('isProfile');
    const localIsAuth = localStorage.getItem('isAuth');

    if (localIsAuth === 'true' && localIsProfile === 'true') {
      navigate(APP_ROUTES_PATH.ACCOUNT);
      return;
    }

    if (localIsAuth === 'true') {
      navigate(APP_ROUTES_PATH.PROFILE);
      return;
    }

    dispatch(setError(null));
    // if (isAuth && isProfile) {
    //   navigate(APP_ROUTES_PATH.ACCOUNT);
    //   return;
    // }

    // if (isAuth) {
    //   navigate(APP_ROUTES_PATH.PROFILE);
    //   return;
    // }
  }, []);

  console.log(location);
  console.log(currentPathName);

  return <>{currentPathName === '/login' ? <Login /> : <Registration />}</>;
};

export default Auth;
