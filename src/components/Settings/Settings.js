import React from 'react';
import Page from '../SharedPages/Page.js';
import ConfirmButton from './ConfirmButton';
import Logo from './Logo/Logo.js';
import CoinList from './CoinList';
import Search from './Search';
const Settings = () => {
  return (
    <Page name="settings">
      <Logo />
      <CoinList topSection />
      <ConfirmButton />
      <Search />
      <CoinList />
    </Page>
  );
};
export default Settings;
