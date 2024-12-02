import CommonAccountLayout from 'components/CommonAccountLayout/CommonAccountLayout';
import React, { useEffect, useState } from 'react';
import styles from './InternalTransfer.module.css';
import { useSelector } from 'react-redux';
import Select from 'ui/Select/Select';
import Input from 'ui/Input/Input';
import CustomButton from 'ui/CustomButton/CustomButton';
import Error from 'ui/Error/Error';
import { getCardDetails } from 'utils/cardUtils';
import CardString from './CardString/CardString';

const InternalTransfer = () => {
  const { cards } = useSelector((state) => state.card);
  const { balance, isLoading, error } = useSelector((state) => state.account);
  const [amount, setAmount] = useState();
  const [selectedCard1, setSelectedCard1] = useState();
  const [selectedCard2, setSelectedCard2] = useState();
  const [cardsList1, setCardsList1] = useState([]);
  const [cardsList2, setCardsList2] = useState([]);
  const [err, setErr] = useState();

  const getCardString = (item) => `${item.customName}#${item.id} ${item.balance} BYN`;

  const updateCardsList1 = () => {
    const newList = cards.filter((item) => getCardString(item) !== selectedCard2).map((item) => getCardString(item));

    newList.push(`Аккаунт ${balance} BYN`);

    setCardsList1(newList);
  };

  const updateCardsList2 = () => {
    const newList = cards.filter((item) => getCardString(item) !== selectedCard1).map((item) => getCardString(item));

    newList.push(`Аккаунт ${balance} BYN`);

    setCardsList2(newList);
  };

  useEffect(() => {
    setSelectedCard1(`Аккаунт ${balance} BYN`);
    setSelectedCard2(`Аккаунт ${balance} BYN`);
    updateCardsList1();
    updateCardsList2();
  }, [balance]);

  useEffect(() => {
    updateCardsList1();
    updateCardsList2();
  }, [cards, selectedCard1, selectedCard2, balance]);

  const submitHandler = () => {
    if (selectedCard1 === selectedCard2) {
      setErr('Выберите разные элементы');
      return;
    }
    if (!amount) {
      setErr('Заполните все поля');
      return;
    }
    setErr(null);
  };

  return (
    <CommonAccountLayout>
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
    </CommonAccountLayout>
  );
};

export default InternalTransfer;
