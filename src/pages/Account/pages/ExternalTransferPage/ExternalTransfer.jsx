import React, { useEffect, useState } from 'react';
import styles from './ExternalTransfer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'ui/Select/Select';
import Input from 'ui/Input/Input';
import CustomButton from 'ui/CustomButton/CustomButton';
import Error from 'ui/Error/Error';
import CardString from 'components/CardString/CardString';
import { fetchAllCurrentUserCardsThunk, updateAccountBalanceThunk, updateCardBalanceThunk } from 'store/actions';
import Modal from 'ui/Modal/Modal';
import { SERVICE_TRANSACTION } from 'constants/services';
import TextArea from 'ui/TextArea/TextArea';

const ExternalTransfer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.card);
  const { balance, isLoading, error } = useSelector((state) => state.account);
  const [comment, setComment] = useState();

  const [amount, setAmount] = useState();
  const [selectedCard1, setSelectedCard1] = useState();
  const [selectedCard2, setSelectedCard2] = useState();
  const [cardsList1, setCardsList1] = useState([]);
  const [err, setErr] = useState();

  const accountString = { customName: 'Аккаунт', id: '0', balance, isAccountTransfer: true };

  const makeCardString = (item) => (
    <CardString
      key={`${item.customName}#${item.isAccountTransfer ? '' : item.id}`}
      number={item.number}
      customName={item.customName}
      id={item.id}
      balance={item.balance}
      isAccountTransfer={item.isAccountTransfer}
    />
  );

  const updateCardsList1 = () => {
    const newList = cards.map((item) => makeCardString(item));

    newList.unshift(makeCardString(accountString));

    setCardsList1(newList);
  };

  useEffect(() => {
    updateCardsList1();
  }, [cards, balance]);

  const submitHandler = async () => {
    const card1 = selectedCard1.props;
    const card2 = {
      number: selectedCard2,
    };

    if (!amount || !card1 || !card2) {
      setErr('Заполните все поля');
      return;
    }

    if (card1.number === card2.number) {
      setErr('Перевод с/на не уникален');
      return;
    }

    setErr(null);

    const isAccountTransfer = !!card1.isAccountTransfer;
    const cardNumber = isAccountTransfer ? (card1.isAccountTransfer ? card2.number : card1.number) : undefined;

    const transferData = {
      type: isAccountTransfer
        ? card1.isAccountTransfer
          ? SERVICE_TRANSACTION.PAYMENT
          : SERVICE_TRANSACTION.DEPOSIT
        : SERVICE_TRANSACTION.PAYMENT,
      amount: amount,
      number: isAccountTransfer ? cardNumber : card1.number,
      secondNumber: isAccountTransfer ? undefined : card2.number,
      description: comment,
    };

    try {
      if (isAccountTransfer) {
        await dispatch(updateAccountBalanceThunk(transferData)).unwrap();
        dispatch(fetchAllCurrentUserCardsThunk());
      } else {
        await dispatch(updateCardBalanceThunk(transferData)).unwrap();
      }
      setSelectedCard1('');
      setSelectedCard2('');
      setAmount('');
      setIsModalOpen(true);
    } catch (error) {
      setErr(error);
      return;
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>Перевод на карту</h2>
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
        <div className={styles.input}>
          <small>Перевести на</small>
          <Input
            placeholder="1234 1234 1234 1234"
            text={selectedCard2}
            setText={setSelectedCard2}
            maxLength="19"
            patternOnChange="\d"
            pattern="\d"
            isCardNumber={true}
          />
        </div>
        <div className={styles.input}>
          <small>Сумма (BYN)</small>
          <Input placeholder="BYN" text={amount} setText={setAmount} maxLength="5" patternOnChange="\d" pattern="\d" />
        </div>
        <div className={styles.input}>
          <small>Комментарий</small>
          <TextArea placeholder="Комментарий" text={comment} setText={setComment} maxLength="255" />
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

export default ExternalTransfer;
