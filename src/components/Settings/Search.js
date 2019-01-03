import React from 'react';
import './Grid.css';
const Search = () => {
  return (
    <div className="searchGrid">
      <h2>Search Coin</h2>
      <Input />
    </div>
  );
};
export default Search;

const Input = () => {
  return <input type="text" name="search" className="searchField" />;
};
