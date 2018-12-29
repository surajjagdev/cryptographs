import React, { Component } from 'react';
import './App.css';
import NavBar from '../Nav/Nav.js';
import Logo from '../Logo/Logo.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Logo />
      </div>
    );
  }
}

export default App;
