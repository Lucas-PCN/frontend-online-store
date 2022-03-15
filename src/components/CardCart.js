import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsTrash } from 'react-icons/bs';
import Box from './generic/Box';
import Button from './generic/Button';
import { removeProduct, updateProduct } from '../services/saveLocalStorage';

const SUBTRACT = -1;
const ADD = 1;

export default class CardCart extends Component {
  removeItem(item) {
    const { updateCart } = this.props;
    removeProduct(item);
    updateCart();
  }

  updateItem(item, quantity) {
    const { updateCart } = this.props;
    updateProduct(item, quantity);
    updateCart();
  }

  render() {
    const { item } = this.props;
    const { title, quantity, id, thumbnail } = item;

    return (
      <div key={ id } className="column is-one-third">
        <Box flex>
          <Button
            icon={ <BsTrash /> }
            onClick={ () => this.removeItem(item) }
          />
          <img src={ thumbnail } width="50px" alt={ title } />
          <h4 data-testid="shopping-cart-product-name">{ title }</h4>
          <Button
            data-testid="product-decrease-quantity"
            onClick={ () => this.updateItem(item, SUBTRACT) }
          >
            -
          </Button>
          <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
          <Button
            data-testid="product-increase-quantity"
            onClick={ () => this.updateItem(item, ADD) }
          >
            +
          </Button>
        </Box>
      </div>
    );
  }
}

CardCart.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  })).isRequired,
  updateCart: PropTypes.func.isRequired,
};
