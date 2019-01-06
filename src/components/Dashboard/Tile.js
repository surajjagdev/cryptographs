import React from 'react';
import './Dashboard.css';
const Tile = ({ symbol, change, price }) => {
  return (
    <div className="priceTile">
      <div className="coinSymbol">{symbol}</div>
      <div className="coinChange">{change}</div>
      <div className="coinPrice">${price}</div>
    </div>
  );
};
export default Tile;
