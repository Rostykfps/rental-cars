import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const advertsApi = createApi({
  reducerPath: 'advertsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65552f1e63cafc694fe7887c.mockapi.io',
  }),
  endpoints: (builder) => ({
    getCarsByPage: builder.query({
      query: (page = 1, limit = 8) => `advert?page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetCarsByPageQuery } = advertsApi;
