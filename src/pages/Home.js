import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCardList from '../components/ProductCardList';
import CategoryList from '../components/CategoryList';
import HomeHeader from '../components/HomeHeader';

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
      <div className="is-flex">
        <CategoryList
          selectedCategory={ searchCategory }
          onCategoryChange={ this.setCategory }
        />

        <div className="container is-flex is-flex-direction-column p-3">
          <HomeHeader
            query={ searchQuery }
            updateQuery={ (e) => this.setState({ searchQuery: e.target.value }) }
            search={ this.searchProducts }
          />

          <ProductCardList results={ searchResults } />
        </div>
      </div>
    );
  }
}

export default Home;
