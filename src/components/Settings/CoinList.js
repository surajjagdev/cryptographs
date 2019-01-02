import React from 'react';
import { AppContext } from '../App/AppProvider';
import Grid from './Grid.js';
import './CoinList.css';
export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <Grid>
          {Object.keys(coinList).map(coinKey => (
            <div className="coinListGrid">{coinKey}</div>
          ))}
        </Grid>
      )}
    </AppContext.Consumer>
  );
}
