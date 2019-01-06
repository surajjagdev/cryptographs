import React from 'react';
import './Dashboard.css';
const Tile = ({ symbol, price }) => {
  return (
    <div className="priceTile">
      {symbol} & {price}
    </div>
  );
};
export default Tile;
