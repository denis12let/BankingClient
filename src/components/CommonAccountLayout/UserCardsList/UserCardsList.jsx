import React, { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import styles from './UserCardsList.module.css';
import UserCard from '../../UserCard/UserCard';
import EmptyCard from './EmptyCard/EmptyCard';
import './../../../styles/scrollbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCurrentUserCardsThunk } from 'store/actions';
import Loader from 'ui/Loader/Loader';

const UserCardsList = () => {
  const dispatch = useDispatch();
  const { cards, isLoading, error } = useSelector((state) => state.card);

  useEffect(() => {
    dispatch(fetchAllCurrentUserCardsThunk());
  }, []);
  console.log(isLoading);

  const cardsArray = cards.length ? cards.map((item) => <UserCard cardData={item} />) : [];

  return (
    <SimpleBar>
      <div className={styles.list}>
        {isLoading ? <Loader /> : cardsArray}
        <EmptyCard />
      </div>
    </SimpleBar>
  );
};

export default UserCardsList;
