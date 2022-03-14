import React from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends React.Component {
  render() {
    const { children, ...rest } = this.props;

    return (
      <span className="subtitle is-4 m-0" { ...rest }>
        {children}
      </span>
    );
  }
}

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
};
