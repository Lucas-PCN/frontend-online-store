import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          const { title, thumbnail, price } = product;
          return (
            <ProductCard
              key={ title }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
            />
          );
        })}
      </div>
    );
  }
}

ProductCardList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.any).isRequired,
};
