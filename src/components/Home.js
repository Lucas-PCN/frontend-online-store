import React from 'react';
import { getCategories } from '../services/api';
import { Link } from 'react-router-dom';


class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  getCategoriesFromApi = async () => {
    const response = await getCategories();
    this.setState({ categories: [...response] });
  }

  render() {
    const {
      categories,
    } = this.state;

    return (
      <div>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        {categories.map((categorie) => (
          <button
            data-testid="category"
            type="button"
            key={ categorie.name }
          >
            { categorie.name }
          </button>
        )) }
        <Link to="/carrinho" data-testid="shopping-cart-button">
          <button type="button">Ir para o meu carrinho</button>
        </Link>
      </div>
    );
  }
}

export default Home;
