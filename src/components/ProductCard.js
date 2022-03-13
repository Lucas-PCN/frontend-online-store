import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { id, title, price, thumbnail } = this.props;

    const parsedPrice = price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

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
          <p className="title is-6 m-0 clamp">{ title }</p>
          <span>{ parsedPrice }</span>
        </div>

        <div className="card-footer">
          <Link
            className="card-footer-item"
            to={ `/details-product/${id}` }
            data-testid="product-detail-link"
          >
            Ver mais
          </Link>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
