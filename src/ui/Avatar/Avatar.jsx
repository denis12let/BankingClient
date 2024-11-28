import React from 'react';
import avatar from './Avatar.module.css';
import avatarIcon from './../../assets/icons/avatar/avatar.svg';
import { NavLink } from 'react-router-dom';
import { APP_ROUTES_PATH } from 'constants/app';

const Avatar = ({ isAuth }) => {
  const url = '';
  return (
    <NavLink to={isAuth ? APP_ROUTES_PATH.ACCOUNT : APP_ROUTES_PATH.LOGIN}>
      <img className={avatar.avatar} src={url || avatarIcon} alt="" />
    </NavLink>
  );
};

export default Avatar;
