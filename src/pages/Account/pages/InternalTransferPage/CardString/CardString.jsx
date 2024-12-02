import React from 'react';

const CardString = ({ customName, id, balance }) => {
  return (
    <p>
      {customName}#{id} {balance}BYN
    </p>
  );
};

export default CardString;
