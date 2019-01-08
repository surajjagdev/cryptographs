import React from 'react';
import Page from '../SharedPages/Page';
import PriceGrid from './PriceGrid';
import CoinSpotLightGrid from './CoinSpotLightGrid';
import CoinSpotLight from './CoinSpotLight';
const Dashboard = () => {
  return (
    <Page name="dashboard">
      <PriceGrid />
      <CoinSpotLightGrid>
        <CoinSpotLight />
        <div>Chart goes here</div>
      </CoinSpotLightGrid>
    </Page>
  );
};
export default Dashboard;
