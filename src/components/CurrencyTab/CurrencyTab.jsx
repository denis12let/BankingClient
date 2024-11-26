import React from 'react';
import currencies from './CurrencyTab.module.css';
import Card from 'components/Card/Card';

const CurrencyTab = () => {
  return (
    <Card styles={{ maxWidth: '300px' }}>
      <div className={currencies.currencies}>
        <h2 className={currencies.currencies__title}>Курсы валют</h2>
        <div className={currencies.currencies__inner}>
          <div className={currencies.currencies__list}>
            <span className={currencies.currencies__listTitle}>Валюта</span>
            <span className={`${currencies.currencies__currency} ${currencies.currencies__currency_usd}`}>USD</span>
            <span className={`${currencies.currencies__currency} ${currencies.currencies__currency_eur}`}>EUR</span>
            <span className={`${currencies.currencies__currency} ${currencies.currencies__currency_rub}`}>RUB</span>
          </div>
          <div className={currencies.currencies__list}>
            <span className={currencies.currencies__listTitle}>Покупка</span>
            <span className={currencies.currencies__price}>2,4770</span>
            <span className={currencies.currencies__price}>3,0060</span>
            <span className={currencies.currencies__price}>3,4250</span>
          </div>
          <div className={currencies.currencies__list}>
            <span className={currencies.currencies__listTitle}>Продажа</span>
            <span className={currencies.currencies__price}>2,4940</span>
            <span className={currencies.currencies__price}>3,0280</span>
            <span className={currencies.currencies__price}>3,4550</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CurrencyTab;

// <div className={currencies.currencies__header}>
//   <span className={currencies.currencies__currencyName}>Валюта</span>
//   <span className={currencies.currencies__buy}>Покупка</span>
//   <span className={currencies.currencies__sell}>Продажа</span>
// </div>
// <div className={currencies.currencies__row}>
//   <span className={currencies.currencies__currency}>USD</span>
//   <span className={currencies.currencies__buy}>2,4770</span>
//   <span className={currencies.currencies__sell}>2,4940</span>
// </div>
// <div className={currencies.currencies__row}>
//   <span className={currencies.currencies__currency}>EUR</span>
//   <span className={currencies.currencies__currency}>3,0060</span>
//   <span className={currencies.currencies__sell}>3,0280</span>
// </div>
// <div className={currencies.currencies__row}>
//   <span className={currencies.currencies__currency}>RUB</span>
//   <span className={currencies.currencies__currency}>3,4250</span>
//   <span className={currencies.currencies__sell}>3,4550</span>
// </div>
