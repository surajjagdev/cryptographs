import React from 'react';
import { AppContext } from '../App/AppProvider';
import Grid from './Grid.js';
import CoinTile from './CoinTile';
//import './CoinList.css';
//lets return first 100 items in array of coin list, first 10 if its topSection
const getLowerCoinsDisplay = (coinList, filteredCoins) => {
  return (
    (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0, 100)
  );
};
const getCoinsDisplay = (coinList, topSection, favorites, filteredCoins) => {
  return topSection ? favorites : getLowerCoinsDisplay(coinList, filteredCoins);
};
export default function({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites, filteredCoins }) => (
        <Grid>
          {getCoinsDisplay(coinList, topSection, favorites, filteredCoins).map(
            coinKey => (
              <CoinTile
                key={coinList[coinKey].Id}
                topSection={topSection}
                coinKey={coinKey}
              />
            )
          )}
        </Grid>
      )}
    </AppContext.Consumer>
  );
}
