import React from 'react';
import './Dashboard.css';

const Tile = ({ symbol, change, price, setCurrentFavorite }) => {
  console.log(setCurrentFavorite);
  return (
    <div className="priceTile" onClick={setCurrentFavorite}>
      <div className="coinSymbol">{symbol}</div>
      <div className={change >= 0 ? 'coinChangeGreen' : 'coinChangeRed'}>
        {change}
      </div>
      <div className="coinPrice">${price}</div>
    </div>
  );
};
export default Tile;
