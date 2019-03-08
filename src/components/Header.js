import React, { Component } from 'react';

import Card from '../components/Card';
import Heading from '../components/Heading';

class Header extends Component {
  render() {
    const { children } = this.props;
    return (
      <Card padded>
        <Heading>{children}</Heading>
      </Card>
    );
  }
}

export default Header;
