import React from 'react';
import avatar from './Avatar.module.css';
import avatarIcon from './../../assets/icons/avatar/avatar.svg';
import { NavLink } from 'react-router-dom';
import { APP_ROUTES_PATH } from 'constants/app';
import { useSelector } from 'react-redux';

const Avatar = () => {
  const url = '';
  const { isAuth } = useSelector((state) => state.user);
  const { profile, isProfile } = useSelector((state) => state.profile);

  return (
    <NavLink to={APP_ROUTES_PATH.ACCOUNT}>
      <img className={avatar.avatar} src={profile?.profileImg || avatarIcon} alt="" />
    </NavLink>
  );
};

export default Avatar;
