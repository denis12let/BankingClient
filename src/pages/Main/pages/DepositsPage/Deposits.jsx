import BankServices from 'components/BankServicesList/BankServicesList';
import CommonBankLayout from 'components/CommonBankLayout/CommonBankLayout';
import { SERVICE_TYPE } from 'constants/services';
import React from 'react';

const Deposits = () => {
  return <BankServices type={SERVICE_TYPE.DEPOSIT} />;
};

export default Deposits;
