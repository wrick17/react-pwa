import React from 'react';
import { Link } from 'react-router';

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Oops! You've hit a dead end!
        </h1>
        <Link to="/">Go Home!</Link>
      </div>);
  }
}
