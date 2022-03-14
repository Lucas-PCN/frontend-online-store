import React, { Component } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Header extends Component {
  // componentDidUpdate() {
  //   // Adicionar lógica de puxar quantidade de itens no carrinho!
  // }

  render() {
    const { children } = this.props;

    return (
      <header
        className="is-flex is-justify-items-space-between"
        style={ { gap: '10px' } }
      >
        <div
          className="container is-flex"
          style={ { gap: '5px' } }
        >
          {children}
        </div>

        <Link to="/carrinho" data-testid="shopping-cart-button">
          <Button
            is="link"
            icon={ <AiOutlineShoppingCart /> }
          >
            Ver carrinho (0)
          </Button>
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
