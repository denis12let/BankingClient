import React, { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import styles from './UserCardsList.module.css';
import UserCard from '../../UserCard/UserCard';
import EmptyCard from './EmptyCard/EmptyCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCurrentUserCardsThunk } from 'store/actions';
import Loader from 'ui/Loader/Loader';
import Scroll from 'ui/Scroll/Scroll';

const UserCardsList = () => {
  const dispatch = useDispatch();
  const { cards, isLoading, error } = useSelector((state) => state.card);

  useEffect(() => {
    if (!cards) {
      dispatch(fetchAllCurrentUserCardsThunk());
    }
  }, []);

  const cardsArray = cards.length ? cards.map((item) => <UserCard cardData={item} />) : [];

  return (
    <Scroll>
      <div className={styles.list}>
        {isLoading ? <Loader /> : cardsArray}
        <EmptyCard />
      </div>
    </Scroll>
  );
};

export default UserCardsList;
