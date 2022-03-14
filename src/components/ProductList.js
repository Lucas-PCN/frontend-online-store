import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './generic/Typography/Title';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    const { itemList } = this.props;

    if (!itemList.length) {
      return (
        <Title>Nenhum produto foi encontrado</Title>
      );
    }

    return (
      <div className="columns is-multiline p-3">
        { itemList.map((item) => (
          <div key={ item.id } className="column is-one-third">
            <ProductCard { ...item } />
          </div>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.any),
};

ProductList.defaultProps = {
  itemList: undefined,
};
