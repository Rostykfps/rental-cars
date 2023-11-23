import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarsByPage } from '../../services/apiService';

export const getCarsByPageThunk = createAsyncThunk(
  'adverts/getCarsByPage',
  async ({ page, limit }, thunkAPI) => {
    try {
      return await getCarsByPage(page, limit);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
