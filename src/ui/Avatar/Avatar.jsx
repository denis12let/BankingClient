import React from 'react';
import avatar from './Avatar.module.css';

const Avatar = () => {
  const url = '';
  return (
    <div>
      <img
        className={avatar.avatar}
        src={url || 'https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png'}
      />
    </div>
  );
};

export default Avatar;
