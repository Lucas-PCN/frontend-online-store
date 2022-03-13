import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class HomeHeader extends Component {
  render() {
    const { query, updateQuery, search } = this.props;

    return (
      <header className="level mb-4">
        <div className="level-left level-item">
          <input
            data-testid="query-input"
            className="input"
            placeholder="Procurando algo?"
            onChange={ updateQuery }
            value={ query }
          />
          <button
            className="button is-primary ml-2"
            type="button"
            data-testid="query-button"
            onClick={ search }
          >
            Pesquisar
          </button>
        </div>

        <div className="level-right ml-2">
          <Link to="/carrinho" data-testid="shopping-cart-button">
            <button
              className="button is-link"
              type="button"
            >
              Ir para meu carrinho
            </button>
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
