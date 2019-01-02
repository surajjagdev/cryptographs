import React from 'react';
import Page from '../SharedPages/Page.js';
import ConfirmButton from './ConfirmButton';
import Logo from './Logo/Logo.js';
const Settings = () => {
  return (
    <Page name="settings">
      <Logo />
      <ConfirmButton />
    </Page>
  );
};
export default Settings;
