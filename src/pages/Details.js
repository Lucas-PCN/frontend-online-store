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
              />
              <Button is="primary" data-testid="product-detail-add-to-cart">
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
