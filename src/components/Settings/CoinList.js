import React from 'react';
import { AppContext } from '../App/AppProvider';
import Grid from './Grid.js';
import CoinTile from './CoinTile';
//import './CoinList.css';
//lets return first 100 items in array of coin list
const getCoinsDisplay = coinList => {
  return Object.keys(coinList).slice(0, 100);
};
export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <Grid>
          {getCoinsDisplay(coinList).map(coinKey => (
            <CoinTile key={coinList[coinKey].Id} coinKey={coinKey} />
          ))}
        </Grid>
      )}
    </AppContext.Consumer>
  );
}
