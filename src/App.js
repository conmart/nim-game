import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameContainer from './GameContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">NIM</h1>
        </header>
        <GameContainer />
      </div>
    );
  }
}

export default App;
