import React from 'react';
import './Grid.css';
import { AppContext } from '../App/AppProvider';
//losash to filter
import _ from 'lodash';
import fuzzy from 'fuzzy';
const filterCoins = (e, setFilteredCoins, coinList) => {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
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
  //search through the input and the concated coinNames+symbols and return result in array of string(s)
  let fuzzyResults = fuzzy
    .filter(inputValue, coinSearchStrings, {})
    .map(result => result.string);
  //determining if search is by the coin name or symbol
  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    //return string or symbol
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    );
  });
  console.log(filteredCoins);
  setFilteredCoins(filteredCoins);
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
              filterCoins(e, setFilteredCoins, coinList);
            }}
          />
        </div>
      )}
    </AppContext.Consumer>
  );
};
export default Search;
