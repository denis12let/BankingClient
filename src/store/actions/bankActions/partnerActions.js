import { createAsyncThunk } from '@reduxjs/toolkit';
import { PartnerServices } from 'api/services/bankServices/PartnerServices';

export const getPartnersThunk = createAsyncThunk('partners/getPartners', async () => {
  const data = await PartnerServices.getAll();
  return data;
});

export const getPartnerThunk = createAsyncThunk('partners/getPartner', async (id) => {
  const data = await PartnerServices.getOneById(id);
  return data;
});
