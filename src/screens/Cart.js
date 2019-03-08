import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Card from '../components/Card';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import Header from '../components/Header';

class Cart extends Component {
  render() {
    const { products } = this.props;
    const productsCount = products.length;

    if (!productsCount) {
      return <Redirect to='/' />
    }

    return (
      <div className="container">
        <Header>Cart</Header>
        <div className="main">
          <Card>
            <ul className="list">
              {products.map((product, index) => (
                <CartItem key={product.id} last={productsCount === index + 1} product={product}/>
              ))}
            </ul>
          </Card>
          <div className="footer">
            <Button destination="/" enabled>
              Select more products
            </Button>
            <Button destination="/success" enabled>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
