import React from 'react';
import Tile from './Tile';
import { AppContext } from '../App/AppProvider';
const numberFormatter = number => {
  //convert to string then slice string
  let formattedNumber = (number + '').slice(0, 5);
  return formattedNumber;
};
const PriceTile = ({ price, index }) => {
  let symbol = Object.keys(price)[0];
  let data = price[symbol]['USD'];
  return (
    <AppContext.Consumer>
      {({ currentFavorite, setCurrentFavorite }) => (
        <Tile
          symbol={symbol}
          change={numberFormatter(data.CHANGEPCT24HOUR)}
          price={numberFormatter(data.PRICE)}
          currentFavorite={currentFavorite === symbol}
          setCurrentFavorite={() => setCurrentFavorite(symbol)}
        />
      )}
    </AppContext.Consumer>
  );
};
export default PriceTile;
