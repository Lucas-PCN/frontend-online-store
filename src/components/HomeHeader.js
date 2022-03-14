import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './generic/Button';
import Input from './generic/Input';

export default class HomeHeader extends Component {
  render() {
    const { query, updateQuery, search } = this.props;

    return (
      <header className="level mb-4">
        <div className="level-left level-item">
          <Input
            data-testid="query-input"
            placeholder="Procurando algo?"
            onChange={ updateQuery }
            value={ query }
          />
          <div className="ml-2" />
          <Button
            is="primary"
            data-testid="query-button"
            onClick={ search }
          >
            Pesquisar
          </Button>
        </div>

        <div className="level-right ml-2">
          <Link to="/carrinho" data-testid="shopping-cart-button">
            <Button is="link">Ir para o carrinho</Button>
          </Link>
        </div>
      </header>
    );
  }
}

HomeHeader.propTypes = {
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};
