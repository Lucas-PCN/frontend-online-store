import React from 'react';
import { getProductId } from '../services/saveLocalStorage';
import CardCart from '../components/CardCart';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getCart();
  }

  getCart = () => {
    this.setState({
      items: getProductId(),
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        {items.length > 0
          ? (
            <div className="columns is-multiline p-3">
              { items.map((item) => (
                <CardCart updateCart={ this.getCart } key={ item.id } item={ item } />
              ))}
            </div>
          )
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> }
      </div>
    );
  }
}

export default Cart;
