import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../services/api';

export default class Details extends Component {
  constructor() {
    super();

    this.state = {
      productItem: [],
    };
  }

  async componentDidMount() {
    this.getDetails();
  }

  getDetails = async () => {
    const { match } = this.props;
    const response = await getProduct(match.params.id);
    this.setState({ productItem: response });
  }

  render() {
    const { productItem } = this.state;
    const { title, thumbnail, price } = productItem;
    return (
      <>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } width="70px" />
        <h3>
          R$
          { price }
        </h3>
        <button
          type="button"
        >
          Detalhes
        </button>
      </>
    );
  }
}

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
