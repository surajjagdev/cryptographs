import React from 'react';
import { AppContext } from '../App/AppProvider';
import Grid from './Grid.js';
import CoinTile from './CoinTile';
//import './CoinList.css';
//lets return first 100 items in array of coin list, first 10 if its topSection
const getCoinsDisplay = (coinList, topSection) => {
  return Object.keys(coinList).slice(0, topSection ? 10 : 100);
};
export default function({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <Grid>
          {getCoinsDisplay(coinList, topSection).map(coinKey => (
            <CoinTile
              key={coinList[coinKey].Id}
              topSection={topSection}
              coinKey={coinKey}
            />
          ))}
        </Grid>
      )}
    </AppContext.Consumer>
  );
}
