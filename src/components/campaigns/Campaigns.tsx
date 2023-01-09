import React, { useState } from 'react';
import { useFetchCampaignsQuery } from '../../features/campaign/campaignsSlice';
import { Link } from 'react-router-dom';
// import Schedules from './Schedules';
// import { persistor } from '../../app/store';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';

// clearing cache
const clearCache = createAction('cache/clear');

const Campaigns = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isFetching, isSuccess, refetch } =
    useFetchCampaignsQuery(page);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // clear cache
  function handleClick() {
    dispatch(clearCache());
  }

  function handleRefetch() {
    // force re-fetches the data
    refetch();
  }

  return (
    <div>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <>
          <button onClick={() => navigate(`/campaigns/xyz`)}>Schedules</button>
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
          {/* <button
            onClick={() => {
              persistor.purge();
            }}
          >
            Purge Storage
          </button> */}

          <button onClick={handleClick}>Clear Cache</button>
          <br />
          <button onClick={() => setPage(page - 1)}>Prev Page</button>
          <button onClick={() => setPage(page + 1)}>Next Page</button>
          <br />
          <button onClick={handleRefetch}>Refetch</button>
          {/* <Schedules /> */}
        </>
      )}
    </div>
  );
};

export default Campaigns;
