import React from 'react';
import { AppContext } from '../App/AppProvider';

const ConfirmButton = () => {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <button
          id="confirmButton"
          onClick={() => {
            confirmFavorites();
          }}
        >
          Confirm
        </button>
      )}
    </AppContext.Consumer>
  );
};
export default ConfirmButton;
