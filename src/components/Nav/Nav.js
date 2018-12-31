import React from 'react';
import './Nav.css';
import { AppContext } from '../App/AppProvider';

const dashboardName = 'dashboard';
const settingsName = 'settings';
const NavBar = () => {
  return (
    <div className="navBar">
      <div id="cryptoLink">CryptoDash</div>
      <div />
      <AppContext.Consumer>
        {({ page, setPage }) => (
          <div id="links">
            <button
              id="dashboardButton"
              onClick={() => {
                setPage(dashboardName);
                console.log('dashboard button');
              }}
            >
              DashBoard
            </button>
            <button
              id="settingsButton"
              onClick={() => {
                setPage(settingsName);
                console.log('settings button');
              }}
            >
              Settings
            </button>
          </div>
        )}
      </AppContext.Consumer>
    </div>
  );
};
export default NavBar;
