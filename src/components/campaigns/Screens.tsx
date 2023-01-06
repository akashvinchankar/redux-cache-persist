import React from 'react';
import { useFetchShowsQuery } from '../../features/campaign/showsSlice';

const Orders = () => {
  const { data, error, isLoading, isFetching, isSuccess } =
    useFetchShowsQuery();

  console.log(data);

  return (
    <div>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && <div>Akash</div>}
    </div>
  );
};

export default Orders;
