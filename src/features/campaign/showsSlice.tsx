import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Order } from '../../models/orders.model';

export const showsSlice = createApi({
  reducerPath: 'showsSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  keepUnusedDataFor: 28800,
  endpoints: (builder) => ({
    fetchShows: builder.query<Order[], void>({
      query: () => '',
    }),
  }),
});

export const { useFetchShowsQuery } = showsSlice;
