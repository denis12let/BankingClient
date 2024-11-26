export const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log(process.env);

const BANK_URL = BASE_URL + '/bank';
const ACCOUNT_URL = BASE_URL + '/accounts';
const USER_URL = BASE_URL + '/users';

export const API_URL = {
  BANK_URL,
  ACCOUNT_URL,
  USER_URL,
  PROFILE_URL: USER_URL + '/profile',
  CARD_URL: ACCOUNT_URL + '/cards',
  BASKET_URL: ACCOUNT_URL + '/basket',
  TRANSACTION_URL: ACCOUNT_URL + '/transactions',
  BANK_NEWS_URL: BANK_URL + '/news',
  PARTNER_URL: BANK_URL + '/profile',
};
