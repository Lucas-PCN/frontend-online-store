import React, { Component } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';
import { itemCount } from '../../services/saveLocalStorage';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      count: itemCount(),
    };
  }

  componentDidMount() {
    window.updateCartItemCount = this.updateCartItemCount;
  }

  componentWillUnmount() {
    window.updateCartItemCount = undefined;
  }

  updateCartItemCount = () => {
    this.setState({
      count: itemCount(),
    });
  }

  render() {
    const { children } = this.props;
    const { count } = this.state;

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
            Ver carrinho (
            { count }
            )
          </Button>
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
