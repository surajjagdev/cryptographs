import React from 'react';
import { AppContext } from '../App/AppProvider';
//checks name of child and name of page
export default function({ name, children }) {
  return (
    <AppContext.Consumer>
      {({ page }) => {
        if (page !== name) {
          return null;
        }
        return <div>{children}</div>;
      }}
    </AppContext.Consumer>
  );
}
