import React from 'react';
import styles from './Auth.module.css';
import Registration from 'pages/AuthPage/AuthTab/Registration/Registration';
import Login from 'pages/AuthPage/AuthTab/Login/Login';
import { useLocation } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const currentPathName = location.pathname;

  return <>{currentPathName === '/login' ? <Login /> : <Registration />}</>;
};

export default Auth;
