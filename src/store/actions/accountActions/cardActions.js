import { createAsyncThunk } from '@reduxjs/toolkit';
import { CardServices } from 'api/services';

export const fetchAllCurrentUserCardsThunk = createAsyncThunk('/cards/getAll', async (_, { rejectWithValue }) => {
  try {
    const data = await CardServices.getAll();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchOneCardByIdThunk = createAsyncThunk('/cards/getById', async (id, { rejectWithValue }) => {
  try {
    const data = await CardServices.getOneById(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const createCardThunk = createAsyncThunk('/cards/create', async (cardData, { rejectWithValue }) => {
  try {
    const data = await CardServices.create(cardData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const updateCardThunk = createAsyncThunk('/cards/update', async ({ id, cardData }, { rejectWithValue }) => {
  try {
    const data = await CardServices.update(id, cardData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
export const updateCardBalanceThunk = createAsyncThunk('/cards/updateBalance', async (transferData, { rejectWithValue }) => {
  try {
    const data = await CardServices.updateBalance(transferData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const deleteCardThunk = createAsyncThunk('/cards/delete', async (id, { rejectWithValue }) => {
  try {
    const data = await CardServices.delete(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
