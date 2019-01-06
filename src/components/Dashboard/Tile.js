import React from 'react';
import './Dashboard.css';

const Tile = ({ symbol, change, price }) => {
  console.log(change, symbol);
  return (
    <div className="priceTile">
      <div className="coinSymbol">{symbol}</div>
      <div className={change >= 0 ? 'coinChangeGreen' : 'coinChangeRed'}>
        {change}
      </div>
      <div className="coinPrice">${price}</div>
    </div>
  );
};
export default Tile;
