import BankServices from 'components/BankServicesList/BankServicesList';
import CommonBankLayout from 'components/CommonBankLayout/CommonBankLayout';
import { SERVICE_TYPE } from 'constants/services';
import React from 'react';

const Loans = () => {
  return (
    <CommonBankLayout>
      <BankServices type={SERVICE_TYPE.LOAN} />
    </CommonBankLayout>
  );
};

export default Loans;
