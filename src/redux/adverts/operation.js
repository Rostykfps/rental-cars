import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars, getCarsByPage } from '../../services/apiService';

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

export const getAllCarsThunk = createAsyncThunk(
  'adverts/getAllCars',
  async (_, thunkAPI) => {
    try {
      return await getAllCars();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
