import React from 'react';
import { AppContext } from '../App/AppProvider';
import Grid from './Grid.js';
export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <Grid>
          {Object.keys(coinList).map(coinKey => (
            <div>{coinKey}</div>
          ))}
        </Grid>
      )}
    </AppContext.Consumer>
  );
}
