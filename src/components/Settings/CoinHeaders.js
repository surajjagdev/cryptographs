import React from 'react';
import './CoinList.css';
const CoinHeaders = props => {
  return (
    <div className="coinHeaderGrid">
      <div className="coinName">{props.name}</div>
      <div className="coinSymbol">{props.symbol}</div>
    </div>
  );
};

export default CoinHeaders;
