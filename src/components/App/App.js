import React, { Component } from 'react';
import './App.css';
import NavBar from '../Nav/Nav.js';
import Logo from '../Logo/Logo.js';
import AppProvider from './AppProvider.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppProvider>
          <NavBar />
          <Logo />
        </AppProvider>
      </div>
    );
  }
}

export default App;
