import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Title from './generic/Typography/Title';
import Currency from './generic/Typography/Currency';
import Button from './generic/Button';
import { updateProduct } from '../services/saveLocalStorage';

export default class ProductCard extends Component {
  render() {
    const { item } = this.props;
    const { id, title, price, thumbnail } = item;

    return (
      <div
        className="card is-flex is-flex-direction-column is-justify-content-space-between"
        data-testid="product"
        style={ { height: '100%' } }
      >
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={ thumbnail } alt={ title } />
          </figure>
        </div>

        <div className="card-content">
          <Title>{ title }</Title>
          <Currency value={ price } />
        </div>

        <div className="card-footer">
          <Link
            className="card-footer-item"
            to={ `/details-product/${id}` }
            data-testid="product-detail-link"
          >
            Ver mais
          </Link>
          <div className="card-footer-item p-0">
            <Button
              is="primary"
              onClick={ () => updateProduct(item, 1) }
              data-testid="product-add-to-cart"
            >
              Adicionar
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  })).isRequired,
};
