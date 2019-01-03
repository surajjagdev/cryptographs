import React from 'react';
import { AppContext } from '../App/AppProvider';
import CoinHeaders from './CoinHeaders';
import CoinImage from '../SharedPages/CoinImage';
import './CoinList.css';
const CoinTile = ({ coinKey, topSection }) => {
  //if in topSection remove coin, else add coin
  return (
    <AppContext.Consumer>
      {({ coinList, addCoin, removeCoin, isInFavorites }) => {
        let coins = coinList[coinKey];
        const getIdName = () => {
          if (topSection) {
            return 'deletableTile';
          } else if (!topSection) {
            return 'selectableTile';
          }
          if (isInFavorites(coinKey)) {
            return 'disabledTile';
          }
        };
        function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
          return topSection
            ? () => {
                removeCoin(coinKey);
              }
            : () => {
                //event.preventDefault();
                addCoin(coinKey);
              };
        }
        return (
          <div
            className="coinListGrid"
            id={getIdName()}
            onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
          >
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
