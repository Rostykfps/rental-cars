import { configureStore } from '@reduxjs/toolkit';
// import { advertsApi } from '../services/apiService';
import { advertsReducer } from './adverts/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  // reducer: {
  //   [advertsApi.reducerPath]: advertsApi.reducer,
  // },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(advertsApi.middleware),
  reducer: {
    adverts: advertsReducer,
    filter: filterReducer,
  },
});
