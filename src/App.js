import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My World</h2>
        </div>
        <p className="App-intro">
          Okay so this is going to be fun. Let's try it out. Hoola Ho!!
        </p>
      </div>
    );
  }
}

export default App;
