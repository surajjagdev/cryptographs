import React from 'react';
//creates new react context
export const AppContext = React.createContext();
//provides state to other components
export default class AppProvider extends React.Component {
  state = { page: 'dashboard' };
  setThePage = page => this.setState({ page });
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
