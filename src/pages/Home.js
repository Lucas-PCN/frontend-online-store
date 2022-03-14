import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import Title from '../components/generic/Typography/Title';
import Header from '../components/Header';
import Input from '../components/generic/Input';
import Button from '../components/generic/Button';
import Box from '../components/generic/Box';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '',
      searchResults: undefined,
      searchCategory: '',
    };
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

  render() {
    const {
      searchQuery,
      searchResults,
      searchCategory,
    } = this.state;

    return (
      <Box flex>
        <CategoryList
          selectedCategory={ searchCategory }
          onCategoryChange={ this.setCategory }
        />

        <Box flex column padding={ 3 }>
          <Header>
            <Input
              data-testid="query-input"
              placeholder="Procurando algo?"
              onChange={ ({ target }) => this.setState({ searchQuery: target.value }) }
              value={ searchQuery }
            />
            <Button
              is="primary"
              onClick={ this.searchProducts }
              data-testid="query-button"
            >
              Pesquisar
            </Button>
          </Header>

          { searchResults
            ? <ProductList itemList={ searchResults } />
            : (
              <Title data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </Title>
            )}
        </Box>
      </Box>
    );
  }
}

export default Home;
