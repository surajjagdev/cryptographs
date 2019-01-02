import React, { Component } from 'react';
import './App.css';
import NavBar from '../Nav/Nav.js';
import Settings from '../Settings/Settings.js';
import AppProvider from './AppProvider.js';
import Content from '../SharedPages/Content';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppProvider>
          <NavBar />
          <Content>
            <Settings />
          </Content>
        </AppProvider>
      </div>
    );
  }
}

export default App;
