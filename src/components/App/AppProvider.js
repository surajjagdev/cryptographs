import React from 'react';
//creates new react context
export const AppContext = React.createContext();
//provides state to other components
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'dashboard', setPage: this.setPage };
  }
  setPage = page => this.setState({ page });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
