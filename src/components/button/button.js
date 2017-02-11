import React, {PropTypes} from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.any.isRequired
};
