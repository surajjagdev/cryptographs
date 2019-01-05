import React from 'react';
import './Grid.css';
import { AppContext } from '../App/AppProvider';
//losash to filter
import _ from 'lodash';
import fuzzy from 'fuzzy';
const filteredCoins = (e, setFilteredCoins, coinList) => {
  let inputValue = e.target.value;
  //delay firing by half a second
  handleFilter(inputValue, coinList, setFilteredCoins);
};
//debounce fn, to delay invoking at least 1 milliseconds till user filters
const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  //get all coin symbols
  let coinSymbols = Object.keys(coinList);
  //get all coin names, and names
  let coinNames = coinSymbols.map(symbols => coinList[symbols].CoinName);
  let coinSearchStrings = coinSymbols.concat(coinNames);
  let fuzzyResults = fuzzy
    .filter(inputValue, coinSearchStrings, {})
    .map(result => result.string);
  console.log(fuzzyResults);
}, 500);
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
