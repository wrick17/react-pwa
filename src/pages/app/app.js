import React, { Component } from 'react';
import { Link } from 'react-router';
import Button from '../../components/button/button'

import './app.less';

class App extends Component {

  render() {
    return (
      <div className="app">
        <h2>Welcome to My World</h2>
        <Link to="/about"><Button>About page</Button></Link>
      </div>
    );
  }
}

export default App;
