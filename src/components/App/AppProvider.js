import React from 'react';
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
      confirmFavorites: this.confirmFavorites
    };
  }
  componentDidMount = () => {
    this.fetchCoins();
  };
  //await for coin list
  fetchCoins = async () => {
    let coinList = (await cryptowrapper.coinList()).Data;
    this.setState({ coinList });
    console.log(coinList);
  };
  confirmFavorites = () => {
    console.log('hello');
    this.setState({ firstVisit: false, page: 'dashboard' });
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        test: 'hello'
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
    return {};
  }
  setPage = page => {
    this.setState({ page });
    console.log('current page', this.state.page);
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
