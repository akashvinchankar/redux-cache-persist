import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Order } from '../../models/orders.model';

export interface OrdersResponse {
  amount: number;
  onPage: number;
  orders: Order[];
}

// this will cache the data for page - 1
export const campaignsSlice = createApi({
  reducerPath: 'campaignsSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://admin-api.staging.qubeslate.com/api/v0/orders/page/',
  }),
  serializeQueryArgs: (query: any) => query.queryArgs,
  keepUnusedDataFor: 28800,
  endpoints: (builder) => ({
    fetchCampaigns: builder.query<OrdersResponse, number>({
      query: (page) => `${page}`,
    }),
  }),
});

export const { useFetchCampaignsQuery } = campaignsSlice;
