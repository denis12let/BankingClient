import React from 'react';
import styles from './User.module.css';

const User = ({ item }) => {
  return (
    <div className={styles.user}>
      <p>id: {item.id}</p>
      <p>email: {item.email}</p>
      <p>role: {item.role}</p>
    </div>
  );
};

export default User;
