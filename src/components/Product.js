import React, { Component } from 'react';

import Heading from '../components/Heading';
import Price from '../components/Price';
import Star from '../components/Star';
import Card from '../components/Card';

class Product extends Component {
  render() {
    const { toggleProduct, product, } = this.props;
    return (
      <Card
        onClick={() => { toggleProduct(this.props.product.id) }}
        selected={product.cart}
      >
        <div className="product">
          <div className="product__heading">
            <div><Price>{product.price}</Price></div>
            <Star show={product.star}/>
          </div>
          <div className="product__body">
            <Heading size={2}>{product.title}</Heading>
          </div>
        </div>
      </Card>

    );
  }
}

export default Product;
