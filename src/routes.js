import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Box from './pages/box/box';
import App from './pages/app/app';
import NotFound from './pages/not_found/not_found';
import About from './pages/about/about';

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Box}>
          <IndexRoute component={App}></IndexRoute>
          <Route path="/about" component={About}></Route>
          <Route path="*" component={NotFound}></Route>
        </Route>
      </Router>
    );
  }
}
