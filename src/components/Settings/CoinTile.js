import React from 'react';
import { AppContext } from '../App/AppProvider';
import CoinHeaders from './CoinHeaders';
import CoinImage from '../SharedPages/CoinImage';
import './CoinList.css';
const CoinTile = ({ coinKey }) => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coins = coinList[coinKey];
        return (
          <div className="coinListGrid" key={coins.Id}>
            <CoinHeaders name={coins.CoinName} symbol={coins.Symbol} />
            <CoinImage coins={coins} />
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};
export default CoinTile;
