import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import superagent from 'superagent';

class App extends Component {

  componentDidMount() {
    // console.log(superagent);
    superagent
    .post('https://luntzglobal-backend-cr.herokuapp.com/api/v1.0/write/participant/enterpin')
    .set('Content-Type', 'application/json')
    .send('{"pin": "VCMOAP"}')
    .then(data => console.log(data.body), err => console.log(err.body))
  }

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
