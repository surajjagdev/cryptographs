import React from 'react';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../SharedPages/CoinImage';
//import './Dashboard.css';

const CoinSpotLight = () => {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, coinList }) => (
        <div className="coinSpotLight">
          {coinList ? <h2>{coinList[currentFavorite].CoinName}</h2> : null}
          <CoinImage
            style={{ height: '200px' }}
            coins={coinList[currentFavorite]}
          />
        </div>
      )}
    </AppContext.Consumer>
  );
};
export default CoinSpotLight;
