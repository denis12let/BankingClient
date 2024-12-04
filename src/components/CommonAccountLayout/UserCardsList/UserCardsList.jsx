import React, { useEffect, useState } from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import styles from './UserCardsList.module.css';
import UserCard from '../../UserCard/UserCard';
import EmptyCard from './EmptyCard/EmptyCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCurrentUserCardsThunk } from 'store/actions';
import Scroll from 'ui/Scroll/Scroll';

const UserCardsList = () => {
  const dispatch = useDispatch();
  const { card, cards, isLoading, error } = useSelector((state) => state.card);

  useEffect(() => {
    dispatch(fetchAllCurrentUserCardsThunk());
  }, [card]);

  const cardsArray = cards.length ? cards.map((item) => <UserCard key={item.number} cardData={item} />) : [];

  return (
    <Scroll>
      <div className={styles.list}>
        {isLoading && !cards.length ? '' : cardsArray}
        <EmptyCard />
      </div>
    </Scroll>
  );
};

export default UserCardsList;
