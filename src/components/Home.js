import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link to="/carrinho" data-testid="shopping-cart-button">
          <button type="button">Ir para o meu carrinho</button>
        </Link>
      </div>
    );
  }
}

export default Home;
