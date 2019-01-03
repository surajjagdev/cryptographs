import React from 'react';
import Page from '../SharedPages/Page.js';
import ConfirmButton from './ConfirmButton';
import Logo from './Logo/Logo.js';
import CoinList from './CoinList';
const Settings = () => {
  return (
    <Page name="settings">
      <Logo />
      <CoinList topSection />
      <ConfirmButton />
      <CoinList />
    </Page>
  );
};
export default Settings;
