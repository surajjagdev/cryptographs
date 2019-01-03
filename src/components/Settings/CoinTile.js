import React from 'react';
import { AppContext } from '../App/AppProvider';
import CoinHeaders from './CoinHeaders';
import CoinImage from '../SharedPages/CoinImage';
import './CoinList.css';
const CoinTile = ({ coinKey, topSection }) => {
  const getIdName = () => {
    if (topSection) {
      return 'deletableTile';
    } else if (!topSection) {
      return 'selectableTile';
    }
  };
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coins = coinList[coinKey];
        return (
          <div className="coinListGrid" id={getIdName()} key={coins.Id}>
            <CoinHeaders
              topSection={topSection}
              name={coins.CoinName}
              symbol={coins.Symbol}
            />
            <CoinImage coins={coins} />
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};
export default CoinTile;
