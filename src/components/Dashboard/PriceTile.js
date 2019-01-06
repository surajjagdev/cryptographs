import React from 'react';
import Tile from './Tile';
const PriceTile = ({ price, index }) => {
  //console.log(price);
  //console.log(index);
  let symbol = Object.keys(price)[0];
  let data = price[symbol]['USD'];
  console.log(`${symbol} ${data.PRICE}`);
  return <Tile symbol={symbol} price={data.PRICE} />;
};
export default PriceTile;
