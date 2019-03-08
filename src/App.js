import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './screens/Home';
import Cart from './screens/Cart';
import Success from './screens/Success';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          title: "Burokėlių sriuba su rūkytu šonkauliu",
          price: "1.90",
          cart: false,
          star: false,
        },
        {
          id: 2,
          title: "Kreminė aitri pomidorų sriuba",
          price: "1.70",
          cart: false,
          star: true,
        },
        {
          id: 3,
          title: "Kijevo kepsnys su bulvių piure ir šviežiomis daržovėmis",
          price: "5.20",
          cart: false,
          star: false,
        },
        {
          id: 4,
          title: "Lėtai keptas jautienos sprandinės kepsnys su orkaitėje keptomis bulvėmis ir burokėlių salotomis",
          price: "5.40",
          cart: false,
          star: true,
        },
        {
          id: 5,
          title: "Pica su Milano saliamiu (25 cm)",
          price: "4.80",
          cart: false,
          star: false,
        },
        {
          id: 6,
          title: "Salotos su Gorgonzola sūriu, ant žarijų keptais persikais ir balzamiko padažu",
          price: "4.80",
          cart: false,
          star: false,
        }
      ],
    };
  }

  toggleProduct = (id) => {
    const { products } = this.state;

    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        product.cart = !product.cart;
      }
      return product;
    });
    this.setState({ updatedProducts });
  };

  clearCart = () => {
    const { products } = this.state;

    const updatedProducts = products.map((product) => {
      product.cart = false;
      return product;
    });
    this.setState({ products: updatedProducts });
  };

  render() {
    const { products } = this.state;

    return (
      <Router>
        <div className="app">
          <Route
            exact path="/"
            render={
              props => (
                <Home {...props}
                  products={products}
                  toggleProduct={this.toggleProduct}
                />
              )
            }
          />
          <Route
            path="/cart"
            render={props => <Cart {...props} products={products.filter(product => product.cart)} />}
          />
          <Route
            path="/success"
            render={
              props => (
                <Success {...props}
                  products={products.filter(product => product.cart)}
                  clearCart={this.clearCart}
                />
              )
            }
          />
        </div>
      </Router>
    );

  }
}

export default App;
