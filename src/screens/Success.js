import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Button from '../components/Button';
import Happy from '../components/Happy';
import Header from '../components/Header';

class Success extends Component {
  componentWillUnmount() {
    const { clearCart } = this.props;

    clearCart();
  }

  render() {
    const { products } = this.props;

    if (!products.length) {
      return <Redirect to='/' />
    }

    return (
      <div className="container">
        <Header>Success</Header>
        <div className="main">
          <Happy />
          <div className="footer footer_center">
            <Button destination="/" enabled>
              Back to home
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
