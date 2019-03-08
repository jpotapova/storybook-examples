import React, { Component } from 'react';

import Button from '../components/Button';
import Product from '../components/Product';
import Header from '../components/Header';

class Home extends Component {
  render() {
    const { products, toggleProduct } = this.props;

    return (
      <div className="container">
        <Header>Products</Header>
        <div className="main">
          <ul className="grid">
            {products.map((product, index) => (
              <li className="grid__item" key={product.id}>
                <Product
                  product={product}
                  toggleProduct={toggleProduct}
                />
              </li>
            ))}
          </ul>
          <div className="footer footer_right">
            <Button
              destination="/cart"
              enabled={products.filter(product => product.cart).length}
            >
              View cart
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
