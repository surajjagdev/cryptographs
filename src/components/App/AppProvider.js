import React from 'react';
import moment from 'moment';
import _ from 'lodash';
const cryptowrapper = require('cryptocompare');

//creates new react context
export const AppContext = React.createContext();
const maxLength = 10;
const loopOver = 10;

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
    this.fetchHistorical();
  };
  addCoin = x => {
    let favorites = [...this.state.favorites];
    if (favorites.length < maxLength) {
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
  fetchHistorical = async () => {
    if (this.state.firstVisit) {
      return;
    }
    let results = await this.historical();
    let historical = [
      {
        name: this.state.currentFavorite,
        data: results.map((symbol, index) => [
          //subtract max val of 10 with index of each historical value
          moment()
            .subtract({ months: loopOver - index })
            .valueOf(),
          symbol.USD
        ])
      }
    ];
    this.setState({ historical });
  };
  historical = () => {
    let promises = [];
    for (let j = loopOver; j > 0; j--) {
      promises.push(
        cryptowrapper.priceHistorical(
          this.state.currentFavorite,
          ['USD'],
          moment()
            .subtract({ months: j })
            .toDate()
        )
      );
    }
    //return all promises when all promises array is completely fetched
    return Promise.all(promises);
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
      {
        firstVisit: false,
        page: 'dashboard',
        currentFavorite,
        prices: null,
        historical: null
      },
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
    this.setState(
      { currentFavorite: symbol, historical: null },
      this.fetchHistorical
    );
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        ...JSON.parse(localStorage.getItem('cryptoDash')),
        currentFavorite: symbol
      })
    );
  };
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
