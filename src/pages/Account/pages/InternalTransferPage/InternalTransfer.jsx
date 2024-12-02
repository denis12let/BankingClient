import React, { useEffect, useState } from 'react';
import styles from './InternalTransfer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'ui/Select/Select';
import Input from 'ui/Input/Input';
import CustomButton from 'ui/CustomButton/CustomButton';
import Error from 'ui/Error/Error';
import { getCardDetails } from 'utils/cardUtils';
import CardString from './CardString/CardString';
import { updateCardBalanceThunk } from 'store/actions';
import Modal from 'ui/Modal/Modal';

const InternalTransfer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.card);
  const { balance, isLoading, error } = useSelector((state) => state.account);
  const [amount, setAmount] = useState();
  const [selectedCard1, setSelectedCard1] = useState();
  const [selectedCard2, setSelectedCard2] = useState();
  const [cardsList1, setCardsList1] = useState([]);
  const [cardsList2, setCardsList2] = useState([]);
  const [err, setErr] = useState();

  const makeCardString = (item) => (
    <CardString
      key={`${item.customName}#${item.id}`}
      number={item.number}
      customName={item.customName}
      id={item.id}
      balance={item.balance}
    />
  );

  const accountString = { customName: 'Аккаунт', id: 0, balance };

  const updateCardsList1 = () => {
    const newList = cards.map((item) => makeCardString(item));

    newList.unshift(makeCardString(accountString));

    setCardsList1(newList);
  };

  const updateCardsList2 = () => {
    const newList = cards.map((item) => makeCardString(item));

    newList.unshift(makeCardString(accountString));

    setCardsList2(newList);
  };

  useEffect(() => {
    updateCardsList1();
    updateCardsList2();
  }, [cards, selectedCard1, selectedCard2, balance]);

  const submitHandler = async () => {
    const card1 = selectedCard1.props;
    const card2 = selectedCard2.props;

    if (card1.id === card2.id) {
      setErr('Перевод с/на не уникален');
      return;
    }
    if (!amount) {
      setErr('Заполните все поля');
      return;
    }
    setErr(null);

    const transferData = {
      type: 'PAYMENT',
      amount: amount,
      number: card1.number,
      secondNumber: card2.number,
    };

    try {
      await dispatch(updateCardBalanceThunk(transferData)).unwrap();

      setIsModalOpen(true);
    } catch (error) {
      setErr(error);
      return;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>Перевод между своими</h2>
        <div className={styles.select}>
          <small>Перевести с</small>
          <Select
            value={selectedCard1}
            onChange={(e) => {
              setSelectedCard1(e.target.value);
            }}
            options={cardsList1}
          />
        </div>
        <div className={styles.select}>
          <small>Перевести на</small>
          <Select
            value={selectedCard2}
            onChange={(e) => {
              setSelectedCard2(e.target.value);
            }}
            options={cardsList2}
          />
        </div>
        <div className={styles.input}>
          <small>Сумма (BYN)</small>
          <Input placeholder="BYN" text={amount} setText={setAmount} maxLength="5" patternOnChange="\d" />
        </div>
        <Error>{err}</Error>
        <CustomButton onClick={(e) => submitHandler(e)} disabled={isLoading}>
          Перевести
        </CustomButton>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Окно" />
    </div>
  );
};

export default InternalTransfer;
