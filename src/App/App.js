import React, { Component } from 'react';
import './App.css';
import NavBar from '../Nav/Nav.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header>Welcome to CrytoGraphs</header>
      </div>
    );
  }
}

export default App;
