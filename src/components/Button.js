import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    const { destination, enabled, children } = this.props;

    return (
      <Link
        to={destination}
        className={enabled ? 'button' : 'button button_disabled'}
      >
        {children}
      </Link>
    );
  }
}

export default Button;
