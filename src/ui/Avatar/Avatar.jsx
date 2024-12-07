import React, { useEffect } from 'react';
import avatar from './Avatar.module.css';
import avatarIcon from './../../assets/icons/avatar/avatar.svg';
import { NavLink } from 'react-router-dom';
import { APP_ROUTES_PATH } from 'constants/app';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentProfileThunk } from 'store/actions';

const Avatar = () => {
  const dispatch = useDispatch();
  const { profile, isProfile } = useSelector((state) => state.profile);

  useEffect(() => {
    if (!profile && isProfile) {
      dispatch(fetchCurrentProfileThunk());
    }
  }, [isProfile]);

  return (
    <NavLink to={APP_ROUTES_PATH.ACCOUNT}>
      <img className={avatar.avatar} src={profile?.profileImg || avatarIcon} alt="" />
    </NavLink>
  );
};

export default Avatar;
