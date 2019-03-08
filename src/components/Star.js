import React, { Component } from 'react';

class Star extends Component {
  render() {
    const { show } = this.props;

    if (!show) {
      return null;
    }

    return (
      <span>&#9733;</span>
    );
  }
}

export default Star;
