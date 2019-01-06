import React from 'react';
import Tile from './Tile';
const numberFormatter = number => {
  //convert to string then slice string
  let formattedNumber = (number + '').slice(0, 5);
  return formattedNumber;
};
const PriceTile = ({ price, index }) => {
  console.log(index);
  let symbol = Object.keys(price)[0];
  let data = price[symbol]['USD'];
  console.log(`${symbol} ${data.PRICE}`);
  return (
    <Tile
      symbol={symbol}
      change={numberFormatter(data.CHANGEPCT24HOUR)}
      price={numberFormatter(data.PRICE)}
    />
  );
};
export default PriceTile;
