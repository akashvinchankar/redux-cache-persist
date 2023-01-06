import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Order } from '../../models/orders.model';

export const screensSlice = createApi({
  reducerPath: 'screensSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  keepUnusedDataFor: 28800,
  endpoints: (builder) => ({
    fetchScreens: builder.query<Order[], void>({
      query: () => '',
    }),
  }),
});

export const { useFetchScreensQuery } = screensSlice;
