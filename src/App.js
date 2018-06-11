import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppContainer from './container/AppContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome </h1>
        </header>
        <AppContainer/>
      </div>
    );
  }
}

export default App;
