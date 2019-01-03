import React from 'react';
import './Grid.css';
import { AppContext } from '../App/AppProvider';
const Search = () => {
  function filterCoins(e, setFilteredCoins, coinList) {
    let inputValue = e.target.value;
    console.log(inputValue);
    console.log('hi');
  }
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <div className="searchGrid">
          <h2>Search Coin</h2>
          <Input
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

const Input = () => {
  return <input type="text" name="searchBar" className="searchField" />;
};
