import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Order } from '../../models/orders.model';

export const schedulesSlice = createApi({
  reducerPath: 'schedulesSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  keepUnusedDataFor: 28800,
  endpoints: (builder) => ({
    fetchSchedules: builder.query<Order[], void>({
      query: () => '',
    }),
  }),
});

export const { useFetchSchedulesQuery } = schedulesSlice;
