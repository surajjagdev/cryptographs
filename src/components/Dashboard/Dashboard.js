import React from 'react';
import Page from '../SharedPages/Page';
import PriceGrid from './PriceGrid';
import CoinSpotLightGrid from './CoinSpotLightGrid';
import CoinSpotLight from './CoinSpotLight';
import PriceChart from './PriceChart';
const Dashboard = () => {
  return (
    <Page name="dashboard">
      <PriceGrid />
      <CoinSpotLightGrid>
        <CoinSpotLight />
        <PriceChart />
      </CoinSpotLightGrid>
    </Page>
  );
};
export default Dashboard;
