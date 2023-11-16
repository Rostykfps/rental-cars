import { configureStore } from '@reduxjs/toolkit';
import { advertsApi } from '../services/apiService';

export const store = configureStore({
  reducer: {
    [advertsApi.reducerPath]: advertsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advertsApi.middleware),
});
