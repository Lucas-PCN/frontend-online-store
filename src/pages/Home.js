import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCardList from '../components/ProductCardList';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      searchQuery: '',
      searchResults: undefined,
      searchCategory: undefined,
    };
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  searchProducts = async (event) => {
    if (event) event.preventDefault();
    const { searchQuery, searchCategory } = this.state;
    getProductsFromCategoryAndQuery(searchCategory, searchQuery)
      .then((res) => {
        this.setState(() => ({
          searchResults: res.results,
        }));
      });
  }

  setCategory = async (categoryId) => {
    this.setState(() => ({
      searchCategory: categoryId,
    }), this.searchProducts);
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
            onClick={ () => this.setCategory(categorie.id) }
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
