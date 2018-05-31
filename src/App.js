import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tick from './components/Tick'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Shopping List for {this.props.name}</h2>
        <h3>
            <Tick/>
        </h3>
      </div>
    );
  }
}

export default App;
