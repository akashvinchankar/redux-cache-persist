import React from 'react';
import { useFetchCampaignsQuery } from '../../features/campaign/campaignsSlice';
import { Link } from 'react-router-dom';
import Schedules from './Schedules';
import { persistor } from '../../app/store';

import { useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';

// clearing cache
const clearCache = createAction('cache/clear');

const Campaigns = () => {
  const { data, error, isLoading, isFetching, isSuccess } =
    useFetchCampaignsQuery();

  console.log(data);
  console.log(isLoading, isFetching);

  const dispatch = useDispatch();

  // clear cache
  function handleClick() {
    dispatch(clearCache());
  }

  return (
    <div>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <>
          <table>
            <thead>
              <tr>
                <td style={{ border: '1px solid black', padding: '15px' }}>
                  Order ID
                </td>
                <td style={{ border: '1px solid black', padding: '15px' }}>
                  Start Date
                </td>
                <td style={{ border: '1px solid black', padding: '15px' }}>
                  End Date
                </td>
                <td style={{ border: '1px solid black', padding: '15px' }}>
                  Spots Scheduled
                </td>
              </tr>
            </thead>

            <tbody>
              {data?.orders.map((order) => {
                return (
                  <tr key={order.id}>
                    <td
                      style={{
                        borderRight: '1px solid black',
                        padding: '15px',
                      }}
                    >
                      <Link to={`/campaigns/${order.orderId}`}>
                        {order.orderId}
                      </Link>
                    </td>
                    <td
                      style={{
                        borderRight: '1px solid black',
                        padding: '15px',
                      }}
                    >
                      {order.startDate}
                    </td>
                    <td
                      style={{
                        borderRight: '1px solid black',
                        padding: '15px',
                      }}
                    >
                      {order.endDate}
                    </td>
                    <td
                      style={{
                        borderRight: '1px solid black',
                        padding: '15px',
                      }}
                    >
                      {order.spotsScheduled}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            onClick={() => {
              persistor.purge();
            }}
          >
            Purge Storage
          </button>

          <button onClick={handleClick}>Clear Cache</button>
          <Schedules />
        </>
      )}
    </div>
  );
};

export default Campaigns;
