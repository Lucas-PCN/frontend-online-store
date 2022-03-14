import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { getProduct } from '../services/api';
import Button from '../components/generic/Button';
import Title from '../components/generic/Typography/Title';
import Subtitle from '../components/generic/Typography/Subtitle';
import Currency from '../components/generic/Typography/Currency';
import Header from '../components/generic/Header';
import Box from '../components/generic/Box';
import Input from '../components/generic/Input';
import { addProduct } from '../services/saveLocalStorage';

export default class Details extends Component {
  constructor() {
    super();

    this.state = {
      productItem: undefined,
      quantity: 1,
      itemId: '',
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

  onInputChange = (id) => {
    const { quantity } = this.state;
    this.setState((previous) => ({
      ...previous,
      itemId: id,
    }));
    addProduct(id, Number(quantity));
  }

  render() {
    const { productItem, quantity } = this.state;
    if (!productItem) return <p>Carregando...</p>;

    const { id, title, price, pictures, shipping } = productItem;

    return (
      <Box padding={ 3 }>
        <Header>
          <Link to="/">
            <Button icon={ <IoIosArrowBack /> }>Voltar</Button>
          </Link>
        </Header>

        <Box flex>
          <img src={ pictures[0].url } alt={ title } width="30%" />

          <div className="is-flex is-flex-direction-column is-justify-content-center">
            <Title data-testid="product-detail-name">{ title }</Title>
            <Subtitle>{shipping.free_shipping && 'Frete grátis'}</Subtitle>
            <Currency value={ price } />

            <Box container={ false } flex gap={ 5 }>
              <Input
                type="number"
                min="1"
                defaultValue="1"
                data-testid="shopping-cart-product-quantity"
                onChange={ ({ target }) => this.setState({ quantity: target.value }) }
                value={ quantity }
              />
              <Button
                is="primary"
                data-testid="product-detail-add-to-cart"
                onClick={ () => this.onInputChange(id) }
              >
                Adicionar ao carrinho
              </Button>
            </Box>
          </div>
        </Box>
      </Box>
    );
  }
}

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
