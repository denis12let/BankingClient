import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from 'api/service';
import { PartnersServices } from 'api/services/PartnersServices';

export const getPartnersThunk = createAsyncThunk('partners/getPartners', async () => {
  const data = await PartnersServices.getAll();
  return data;
});

export const getPartnerThunk = createAsyncThunk('partners/getPartner', async (id) => {
  const data = await PartnersServices.getOne(id);
  return data;
});
