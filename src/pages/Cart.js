import React from 'react';
import { getProductId } from '../services/saveLocalStorage';
import { getProduct } from '../services/api';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      itemsID: [],
      productsCart: [],
    };
  }

  componentDidMount() {
    this.getCart();
  }

  getCart = () => {
    this.setState({
      itemsID: getProductId(),
    }, this.products);
  }

  products = () => {
    const { itemsID } = this.state;
    itemsID.forEach((element) => {
      getProduct(element.id).then((res) => {
        this.setState((prev) => ({
          productsCart: [...prev.productsCart, { ...res, quantity: element.quantity }],
        }));
      });
    });
  }

  render() {
    const { productsCart } = this.state;
    return (
      <div>
        {productsCart.length > 0
          ? (
            <div className="columns is-multiline p-3">
              { productsCart.map((item) => (
                <div key={ item.id } className="column is-one-third">
                  <h3 data-testid="shopping-cart-product-name">{ item.title }</h3>
                  <h1
                    data-testid="shopping-cart-product-quantity"
                  >
                    Quantidades do produto:
                    { item.quantity }
                  </h1>
                </div>
              ))}
            </div>
          )
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> }
      </div>
    );
  }
}

export default Cart;
