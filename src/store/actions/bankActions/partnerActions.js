import { createAsyncThunk } from '@reduxjs/toolkit';
import { PartnerServices } from 'api/services';

export const fetchAllPartnersThunk = createAsyncThunk('/partners/getAll', async (_, { rejectWithValue }) => {
  try {
    const data = await PartnerServices.getAll();
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchOnePartnerByIdThunk = createAsyncThunk('/partners/getById', async (id, { rejectWithValue }) => {
  try {
    const data = await PartnerServices.getOneById(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const createPartnerThunk = createAsyncThunk('/partners/create', async (partnerData, { rejectWithValue }) => {
  try {
    const data = await PartnerServices.create(partnerData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const updatePartnerThunk = createAsyncThunk('/partners/update', async ({ id, partnerData }, { rejectWithValue }) => {
  try {
    const data = await PartnerServices.update(id, partnerData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const deletePartnerThunk = createAsyncThunk('/partners/delete', async (id, { rejectWithValue }) => {
  try {
    const data = await PartnerServices.delete(id);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
