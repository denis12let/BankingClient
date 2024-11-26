import React from 'react';
import avatar from './Avatar.module.css';
import avatarIcon from './../../assets/icons/avatar/avatar.svg';

const Avatar = () => {
  const url = '';
  return (
    <div>
      <img className={avatar.avatar} src={url || avatarIcon} />
    </div>
  );
};

export default Avatar;
