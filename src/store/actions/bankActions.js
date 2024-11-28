import { createAsyncThunk } from '@reduxjs/toolkit';
import { BankServices } from 'api/services/BankServices';

export const getBankThunk = createAsyncThunk('bank/getBank', async () => {
  const data = await BankServices.getOne();
  return data;
});
