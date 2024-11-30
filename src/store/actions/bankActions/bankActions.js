import { createAsyncThunk } from '@reduxjs/toolkit';
import { BankServices } from 'api/services';

export const fetchBankThunk = createAsyncThunk('/bank/getOne', async (_, { rejectWithValue }) => {
  try {
    const data = await BankServices.getOne();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const updateBankThunk = createAsyncThunk('/bank/getById', async (bankData, { rejectWithValue }) => {
  try {
    const data = await BankServices.update(bankData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
