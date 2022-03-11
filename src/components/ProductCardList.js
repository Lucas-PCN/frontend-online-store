import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export default class ProductCardList extends Component {
  render() {
    const { results } = this.props;

    if (!results.length) {
      return <p>Nenhum produto foi encontrado</p>;
    }

    return (
      <div>
        {results.map((product) => {
          const { title, thumbnail, price, id } = product;
          return (
            <div key={ id }>
              <ProductCard
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
              />
              <Link
                to={ `/details-product/${id}` }
                data-testid="product-detail-link"
              >
                <button
                  type="button"
                >
                  Detalhes
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

ProductCardList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.any).isRequired,
};
