import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Campaigns from '../src/components/campaigns/Campaigns';
import CampaignsLayout from './components/campaigns/CampaignsLayout';
import Schedules from '../src/components/campaigns/Schedules';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route element={<Navigate to="/campaigns" />} index />
        <Route element={<CampaignsLayout />} path="campaigns">
          <Route element={<Campaigns />} index />
          <Route element={<Schedules />} path=":orderId" />
          {/* <Route element={<PageScreens />} path=":orderId/:scheduleId" /> */}
          {/* <Route
            element={<PageShows />}
            path=":orderId/:scheduleId/:screenId"
          /> */}
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
