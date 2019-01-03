import React from 'react';
import DeleteIcon from './DeleteIcon';
import './CoinList.css';
const CoinHeaders = props => {
  return (
    <div className="coinHeaderGrid">
      <div className="coinName">{props.name}</div>
      {props.topSection ? (
        <DeleteIcon />
      ) : (
        <div className="coinSymbol">{props.symbol}</div>
      )}
    </div>
  );
};

export default CoinHeaders;
