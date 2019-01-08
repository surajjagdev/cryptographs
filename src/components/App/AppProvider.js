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
      setFilteredCoins: this.setFilteredCoins,
      setCurrentFavorite: this.setCurrentFavorite
    };
  }
  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
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
  fetchPrices = async () => {
    if (this.state.firstVisit) {
      return;
    }
    //await the prices then set the state
    let prices = await this.prices();
    console.log(prices);
    this.setState({ prices });
  };
  //return a promise array
  prices = async () => {
    let returnData = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        //get USD prices because not every coin has CAD prices
        let priceData = await cryptowrapper.priceFull(
          this.state.favorites[i],
          'USD'
        );
        returnData.push(priceData);
      } catch (error) {
        console.warn(`Fetching prices error ${error}`);
      }
    }
    return returnData;
  };
  confirmFavorites = () => {
    let currentFavorite = this.state.favorites[0];
    this.setState(
      { firstVisit: false, page: 'dashboard', currentFavorite },
      () => {
        this.fetchPrices();
      }
    );
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        favorites: this.state.favorites,
        currentFavorite
      })
    );
  };
  //setting state of currentFavorite then going to the local storage and setting local storage to be stringified version of currentFavorite
  setCurrentFavorite = symbol => {
    this.setState({ currentFavorite: symbol });
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        ...JSON.parse(localStorage.getItem('cryptoDash')),
        currentFavorite: symbol
      })
    );
  };
  /* setCurrentFavorite = symbol => {
    this.setState({ currentFavorite: symbol });
    localStorage.setItem('cryptoDash', JSON.stringify({
      currentFavorite:symbol
    }))
  };*/
  //get data from local storage. If no data then page will be set to settings page
  //and firstVisit will be true
  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return { page: 'settings', firstVisit: true };
    }
    let { favorites, currentFavorite } = cryptoDashData;
    return { favorites, currentFavorite };
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
