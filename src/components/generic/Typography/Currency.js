import React from 'react';
import PropTypes from 'prop-types';

export default class Currency extends React.Component {
  render() {
    const { value } = this.props;

    const parsedValue = value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

    return (
      <span className="subtitle is-5" { ...this.props }>{parsedValue}</span>
    );
  }
}

Currency.propTypes = {
  value: PropTypes.number.isRequired,
};
