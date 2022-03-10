import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsByName } from '../services/api';
import ProductCardList from './ProductCardList';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      searchQuery: '',
      searchResults: undefined,
    };
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  searchProducts = async (e) => {
    e.preventDefault();
    const { searchQuery } = this.state;
    getProductsByName(searchQuery)
      .then((res) => {
        this.setState(() => ({
          searchResults: res.results,
        }));
      });
  }

  getCategoriesFromApi = async () => {
    const response = await getCategories();
    this.setState({ categories: [...response] });
  }

  render() {
    const {
      categories,
      searchQuery,
      searchResults,
    } = this.state;

    return (
      <div>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>

        <form>
          <input
            placeholder="Procurando por algo?"
            value={ searchQuery }
            data-testid="query-input"
            onChange={ (e) => this.setState({ searchQuery: e.target.value }) }
          />
          <button
            data-testid="query-button"
            type="submit"
            onClick={ this.searchProducts }
          >
            Pesquisar
          </button>
        </form>

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

        {searchResults !== undefined && <ProductCardList results={ searchResults } />}
      </div>
    );
  }
}

export default Home;
