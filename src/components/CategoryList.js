import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class CategoryList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories()
      .then((categories) => {
        this.setState({ categories });
      });
  }

  render() {
    const { categories } = this.state;
    const { selectedCategory, onCategoryChange } = this.props;

    return (
      <aside className="p-3" style={ { minWidth: 'fit-content' } }>
        <p className="menu-label">
          Categorias
        </p>
        <ul className="menu-list">
          { categories.map((category) => {
            const isActive = selectedCategory === category.id;

            return (
              <li key={ category.id }>
                <a
                  data-testid="category"
                  href={ false }
                  className={ isActive ? 'is-active' : undefined }
                  onClick={ () => onCategoryChange(category.id) }
                >
                  { category.name }
                </a>
              </li>
            );
          }) }
        </ul>
      </aside>
    );
  }
}

CategoryList.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};
