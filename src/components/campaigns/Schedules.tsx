import React from 'react';
import { useFetchCampaignsQuery } from '../../features/campaign/campaignsSlice';

const Schedules = () => {
  const { data, isLoading, isFetching, isSuccess } = useFetchCampaignsQuery();

  return (
    <div>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {/* {error && <h2>Something went wrong</h2>} */}
      {isSuccess && (
        <div>
          <hr />
          <h3>2nd Component</h3>
          <strong>Cached data is used instead of refetching</strong>
          {data?.orders.map((order) => {
            return <div key={order.id}>{order.orderId}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default Schedules;
