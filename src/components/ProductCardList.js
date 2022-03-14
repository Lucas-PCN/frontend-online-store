import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductCardList extends Component {
  render() {
    const { results } = this.props;

    if (!results) {
      return (
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      );
    }

    if (!results.length) {
      return <p>Nenhum produto foi encontrado</p>;
    }

    return (
      <div className="columns is-multiline">
        {results.map((product) => {
          const { title, thumbnail, price, id } = product;

          return (
            <div key={ id } className="column is-one-fifth">
              <ProductCard
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
                id={ id }
              />
            </div>
          );
        })}
      </div>
    );
  }
}

ProductCardList.propTypes = {
  results: PropTypes.oneOf(
    [PropTypes.arrayOf(PropTypes.any).isRequired, undefined],
  ),
};

ProductCardList.defaultProps = {
  results: undefined,
};
