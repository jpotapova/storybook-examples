import React, { Component } from 'react';

class Price extends Component {
  render() {
    const { children } = this.props;

    return (
      <span>
        &euro; {children}
      </span>
    );
  }
}

export default Price;
