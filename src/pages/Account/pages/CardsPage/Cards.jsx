import React, { useState } from 'react';
import CreditCard from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from './Cards.module.css';
import 'styles/card.css';
import CardCreateForm from './CardCreateForm/CardCreateForm';
import { useDispatch, useSelector } from 'react-redux';
import { createCardThunk } from 'store/actions';
import Modal from 'ui/Modal/Modal';

const Cards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { card, error, isLoading } = useSelector((state) => state.card);
  const [number, setNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [holderName, setHolderName] = useState('');
  const [focus, setFocus] = useState('number');
  const [err, setErr] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!expiryMonth || !expiryYear) {
      setErr('Не все поля введены');
      return;
    }

    const card = {
      number,
      date: `20${expiryYear}-${expiryMonth}`,
      CVC: cvc,
      holderName: holderName.toUpperCase(),
      customName: name,
    };

    try {
      await dispatch(createCardThunk(card)).unwrap();
      setIsModalOpen(true);
      setNumber('');
      setCvc('');
      setExpiryMonth('');
      setExpiryYear('');
      setFocus('number');
      setHolderName('');
      setName('');
    } catch (error) {
      return;
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Добавить карту</h2>
      <div className={styles.inner}>
        <CardCreateForm
          number={number}
          setNumber={setNumber}
          expiryMonth={expiryMonth}
          setExpiryMonth={setExpiryMonth}
          expiryYear={expiryYear}
          setExpiryYear={setExpiryYear}
          cvc={cvc}
          setCvc={setCvc}
          name={name}
          setName={setName}
          holderName={holderName}
          setHolderName={setHolderName}
          focus={focus}
          setFocus={setFocus}
          submitHandler={submitHandler}
          error={err}
          isLoading={isLoading}
        />
        <CreditCard number={number} expiry={`${expiryMonth}/${expiryYear}`} cvc={cvc} name={holderName} focused={focus} />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Окно" />
    </div>
  );
};

export default Cards;
