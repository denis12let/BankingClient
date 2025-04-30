import React, { useState } from 'react';
import styles from './UserSearch.module.css';
import Input from 'ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsersThunk } from 'store/actions';
import Loader from 'ui/Loader/Loader';
import Empty from 'components/Empty/Empty';
import User from './User/User';

const UserSearch = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.user);
  const [email, setEmail] = useState();

  const onChange = (email) => {
    dispatch(fetchAllUsersThunk({ email }));
    console.log(users);
  };

  const usersList = users.map((item) => <User item={item} />);

  return (
    <div>
      <Input text={email} setText={onChange} />
      <div className={styles.list}>{isLoading ? <Loader /> : usersList.length === 0 ? <Empty /> : usersList}</div>
    </div>
  );
};

export default UserSearch;
