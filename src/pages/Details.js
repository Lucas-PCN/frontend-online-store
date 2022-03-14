import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProduct } from '../services/api';
import Button from '../components/generic/Button';
import Title from '../components/generic/Typography/Title';
import Subtitle from '../components/generic/Typography/Subtitle';
import Currency from '../components/generic/Typography/Currency';

export default class Details extends Component {
  constructor() {
    super();

    this.state = {
      productItem: undefined,
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
    if (!productItem) return <p>Carregando...</p>;

    const { title, price, pictures, shipping } = productItem;

    return (
      <div className="container is-max-desktop m-auto p-3">
        <header className="container is-flex is-justify-content-space-between">
          <Link to="/">
            <Button>Voltar</Button>
          </Link>
          <Link to="/carrinho">
            <Button>Carrinho</Button>
          </Link>
        </header>

        <div className="box is-flex mt-2">
          <img src={ pictures[0].url } alt={ title } width="30%" />

          <div className="is-flex is-flex-direction-column is-justify-content-center">
            <Title data-testid="product-detail-name">{ title }</Title>
            <Subtitle>{shipping.free_shipping && 'Frete grátis'}</Subtitle>
            <Currency value={ price } />

            <form className="is-flex">
              <input
                data-testid="quantity-input"
                className="input"
                placeholder="Quantidade"
                type="number"
                min="1"
                defaultValue="1"
              />
              <button
                className="button is-primary ml-2"
                type="button"
                data-testid="query-button"
              >
                Adicionar ao carrinho
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
