import React from 'react';
import './Grid.css';
import { AppContext } from '../App/AppProvider';

const filteredCoins = (e, setFilteredCoins, coinList) => {
  let inputValue = e.target.value;
  console.log(inputValue);
};
const Search = () => {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <div className="searchGrid">
          <h2>Search Coin</h2>
          <input
            type="text"
            name="searchBar"
            className="searchField"
            placeholder="BTC"
            onKeyUp={e => {
              filteredCoins(e, setFilteredCoins, coinList);
            }}
          />
          />
        </div>
      )}
    </AppContext.Consumer>
  );
};
export default Search;
