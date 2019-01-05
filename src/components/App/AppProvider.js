import React from 'react';
import _ from 'lodash';
const cryptowrapper = require('cryptocompare');
//creates new react context
export const AppContext = React.createContext();
//provides state to other components
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'settings',
      favorites: ['BTC', 'ETH', 'XRP', 'EOS', 'FLAP'],
      ...this.savedSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      confirmFavorites: this.confirmFavorites,
      setFilteredCoins: this.setFilteredCoins
    };
  }
  componentDidMount = () => {
    this.fetchCoins();
  };
  addCoin = x => {
    let favorites = [...this.state.favorites];
    if (favorites.length < 10) {
      favorites.push(x);
      console.log(x);
      this.setState({ favorites });
    }
  };
  removeCoin = key => {
    let favoriteCoins = [...this.state.favorites];
    this.setState({ favorites: _.pull(favoriteCoins, key) });
  };
  isInFavorites = key => _.includes(this.state.favorites, key);

  //await for coin list
  fetchCoins = async () => {
    let coinList = (await cryptowrapper.coinList()).Data;
    this.setState({ coinList });
  };
  confirmFavorites = () => {
    console.log('hello');
    this.setState({ firstVisit: false, page: 'dashboard' });
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        favorites: this.state.favorites
      })
    );
  };
  //get data from local storage. If no data then page will be set to settings page
  //and firstVisit will be true
  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return { page: 'settings', firstVisit: true };
    }
    let { favorites } = cryptoDashData;
    return { favorites };
  }
  setPage = page => {
    this.setState({ page });
    console.log('current page', this.state.page);
  };
  //set filtered coins on app
  setFilteredCoins = filteredCoins => {
    this.setState({ filteredCoins });
  };

  render() {
    console.log(this.state.isInFavorites);
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
