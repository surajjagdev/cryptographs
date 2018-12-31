import React from 'react';
import { AppContext } from '../../App/AppProvider';
import './Logo.css';
const Logo = () => {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div className="logo">
            Welcome to CrytoGraphs. Please select your favourite coins to check
            data
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
};
export default Logo;
